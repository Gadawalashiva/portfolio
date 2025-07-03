// src/App.jsx
import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NavBar from './Components/Navbar'; 
import Body from './Components/Bodys';
import Aboutme from './Components/Aboutme';
import MyJourney from './Components/Myjourney';
import Softskill from './Components/Softskill';
import ProjectsSection from './Components/Projectsection';
import Footer from './Components/Footer';

function App() {
  const greetings = [
    'నమస్కారం', 'Hello', 'नमस्ते', 'ನಮಸ್ಕಾರ',
    'നമസ്കാരം', 'નમસ્તે ', 'नमस्कार ',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const interval = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(interval);
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, greetings.length]);

  return (
    <BrowserRouter>
      <div className="app-container">
        {showSplash ? (
          <div className="splash-screen">
            <h1 className="splash-text">{greetings[currentIndex]}</h1>
            <p className="splash-subtext">Welcome to my portfolio</p>
          </div>
        ) : (
          <>
            <div className="main-background-image"></div>
            <NavBar /> {/* This NavBar component will now be fixed by App.css */}

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Body />
                    <Aboutme />
                    <MyJourney />
                    <Softskill />
                    <Footer />
                  </>
                }
              />
              <Route path="/projects/" element={<ProjectsSection />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
