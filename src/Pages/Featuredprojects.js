import React from "react";
import welthImage from '../asests/WealthFinance.jpg';
import founderImage from '../asests/Co-founderMatching.png';
import ecommerceImage from '../asests/E-commerce.jpg';
import projects from '../styles/projects.css';

function Featuredprojects(){
  return(
    <>
      <h1 className="project-heading text-center text-4xl font-bold text-gold-300 mb-8">Featured Projects</h1>
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Card 1 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={welthImage} alt="Wealth Finance Tracker" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-gold-200 mb-2">Wealth, Finance Tracker</h3>
            <p className="project-description text-gray-300 text-sm mb-4">
              AI-powered financial platform.
            </p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-full">Next.js</span>
              <span className="tech-badge bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-full">AI</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={founderImage} alt="Founder Matching" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-gold-200 mb-2">Founder Matching</h3>
            <p className="project-description text-gray-300 text-sm mb-4">
              Platform to connect startup founders.
            </p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
              <span className="tech-badge bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full">Node.js</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={ecommerceImage} alt="E-commerce" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-gold-200 mb-2">E-Commerce</h3>
            <p className="project-description text-gray-300 text-sm mb-4">
              Modern e-commerce solution.
            </p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-full">Next.js</span>
              <span className="tech-badge bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featuredprojects;
