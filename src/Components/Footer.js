import React from "react";
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  const developer = {
    name: 'Shiva',
    passion: 'Web Development',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'JavaScript'],
  };

  const socialLinks = [
    { name: 'Github', href: 'https://github.com/Gadawalashiva', Icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shiva-gadwal', Icon: FaLinkedin },
    { name: 'Twitter', href: 'https://x.com/Abhi82534404', Icon: FaTwitter },
    { name: 'Instagram', href: 'https://instagram.com/shri_936', Icon: FaInstagram },
    { name: 'Email', href: 'mailto:shivaabhii053@gmail.com', Icon: MdEmail },
  ];

  return (

    <footer id="footer" className="footer-container">

      <div className="footer-main-content">
        <div className="footer-section footer-intro">
          <h1>Gadwal <span className="gold-text">Shiva</span></h1>
          <p>Crafting digital experiences with passion and precision.</p>
        </div>

        <div className="footer-section footer-developer-info">
          <h3>About the Developer</h3>
  
          <div className="developer-info-card">
            <p><strong>Name:</strong> {developer.name}</p>
            <p><strong>Passion:</strong> {developer.passion}</p>
            <p>
              <strong>Skills:</strong> {developer.skills.join(', ')}
              <span className="typing-cursor">|</span>
            </p>
          </div>
        </div>

   
        <div className="footer-section footer-contact">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="social-links">
            {socialLinks.map(({ name, href, Icon }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Icon size={20} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                {name}
              </a>
            ))}
          </div>
        </div>
      </div> 

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gadwal Shiva. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;