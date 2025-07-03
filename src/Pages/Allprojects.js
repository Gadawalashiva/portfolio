import React from 'react';
import welthImage from '../asests/WealthFinance.jpg';
import founderImage from '../asests/Co-founderMatching.png';
import ecommerceImage from '../asests/E-commerce.jpg';
import eduImage from '../asests/Education.jpg';
import foodImage from '../asests/FoodImage.jpg';
import todoImage from '../asests/TodoList.jpg';
import '../styles/projects.css'; 
import '../styles/miniproject.css'; 

function All() {
  return (
    <>
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center" style={{textAlign:"center",padding:"20px",color:"goldenrod"}}>Featured Projects</h1>
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Featured Projects */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={welthImage} alt="Wealth Finance Tracker" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-yellow-400 mb-2">Wealth, Finance Tracker</h3>
            <p className="project-description text-gray-300 text-sm mb-4" style={{fontSize:"1rem"}}>AI-powered financial platform offering expense tracking, smart budgeting recommendations, real-time analytics dashboards, and secure transaction management.
.</p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-full">Next.js</span>
              <span className="tech-badge bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded-full">AI</span>
            </div>
          </div>
        </div>

        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={founderImage} alt="Founder Matching" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-yellow-400 mb-2">Founder Matching</h3>
            <p className="project-description text-gray-300 text-sm mb-4" style={{fontSize:"1rem"}}>Platform to connect startup founders, enable team formation, share project ideas, discover co-founders with complementary skills, streamline collaboration workflows, access curated resources for fundraising and legal setup, and build your startup network with verified profiles and messaging tools.
</p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
              <span className="tech-badge bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full">Node.js</span>
            </div>
          </div>
        </div>

        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={ecommerceImage} alt="E-commerce" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-yellow-400 mb-2">E-Commerce</h3>
            <p className="project-description text-gray-300 text-sm mb-4" style={{fontSize:"1rem"}}>A modern e-commerce solution with product catalog management, secure checkout using Stripe integration, responsive design for all devices, inventory tracking, customer accounts with order history, and promotional tools to boost sales.Includes admin dashboards for managing orders, discounts, and real-time sales analytics.

</p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-full">Next.js</span>
              <span className="tech-badge bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Stripe</span>
            </div>
          </div>
        </div>
      </div>

            <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center" style={{textAlign:"center",padding:"20px",color:"goldenrod"}}>Mini Projects</h1>
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Mini Projects */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={eduImage} alt="Educational Site" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-yellow-400 mb-2">Educational Site</h3>
            <p className="project-description text-gray-300 text-sm mb-4" style={{fontSize:"1rem"}}>A modern education platform with responsive desig content modules, interactive quizzes and assessments, user authentication and progress tracking, and an admin dashboard for course management.</p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">HTML</span>
              <span className="tech-badge bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">CSS</span>
              <span className="tech-badge bg-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded-full">JavaScript</span>
            </div>
          </div>
        </div>

        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={foodImage} alt="Food Website" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-yellow-400 mb-2">Food Website</h3>
            <p className="project-description text-gray-300 text-sm mb-4" style={{fontSize:"1rem"}}>A restaurant landing page featuring menu, gallery, and contact forms, online table reservations, customer reviews and testimonials, and integration with delivery services.</p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
              <span className="tech-badge bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
        </div>

        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={todoImage} alt="Todo App" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-yellow-400 mb-2">Todo List</h3>
            <p className="project-description text-gray-300 text-sm mb-4" style={{fontSize:"1rem"}}>Simple todo app to manage tasks, edit, and delete with localStorage, real-time task filtering, responsive mobile-friendly layout, and persistent data storage across sessions.</p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
              <span className="tech-badge bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">LocalStorage</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
