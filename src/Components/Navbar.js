// src/Components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navstyle.css';

// Removed scrollToProjects prop as it's no longer needed for direct route navigation
function NavBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme ? savedTheme : 'light';
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    // This effect handles scrolling to hash links (e.g., /#aboutme)
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (location.pathname === '/') {
      // Scroll to top only if on the root path and no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <nav className="NavBar"> {/* Ensure this 'NavBar' class is styled in navstyle.css for fixed position */}
        <div className="Nav-container">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>

          <ul className="Nav-left">
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/#aboutme">About</Link></li>
            <li><Link to="/#footer">Contact</Link></li>
            {/* *** FIX: Changed to="/projects" and removed onClick={scrollToProjects} *** */}
            <li className="nav-link-hide">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>

          <ul className="Nav-right">
            <li className="nav-link-hide"><a href='https://www.linkedin.com/checkpoint/lg/sign-in-another-account' className="hire-me-btn">Hire me</a></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={toggleSidebar}>
          &times;
        </button>
        <ul>
          <li><Link to="/#home" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/#aboutme" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/#footer" onClick={toggleSidebar}>Contact</Link></li>
          {/* *** FIX: Changed to="/projects" and simplified onClick *** */}
          <li>
            <Link to="/projects" onClick={toggleSidebar}>Projects</Link>
          </li>
          <li><Link to="/#footer" onClick={toggleSidebar} className="hire-me-btn">Hire me</Link></li>
          <li>
            <button
              className="theme-toggle sidebar-theme-toggle"
              onClick={() => {
                toggleTheme();
                toggleSidebar();
              }}
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default NavBar;
