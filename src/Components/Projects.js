import React from "react";
import welthImage from '../assests/WealthFinance.jpg';
import founderImage from '../assests/Co-founderMatching.png';
import ecommerceImage from '../assests/E-commerce.jpg'; 
import projects from '../styles/projects.css';

function Project() {
  return (
    <>
      <h1 className="project-heading">My Projects</h1>
      <div className="project-grid">
        {/* Card 1 */}
        <div className="project-card">
          <img src={welthImage} alt="Welth Finance Tracker" className="project-image" />
          <h3 className="project-title">Welth, Finance Tracker</h3>
          <p className="project-description">
            AI-powered financial platform.
          </p>
          <div className="tech-badges">
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">AI</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <img src={founderImage} alt="Founder Matching" className="project-image" />
          <h3 className="project-title">Founder Matching</h3>
          <p className="project-description">
            Platform to connect startup founders.
          </p>
          <div className="tech-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-card">
          <img src={ecommerceImage} alt="E-commerce" className="project-image" />
          <h3 className="project-title">E-Commerce</h3>
          <p className="project-description">
            Modern e-commerce solution.
          </p>
          <div className="tech-badges">
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">Stripe</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
