import React from "react";
import eduImage from '../asests/Education.jpg';
import foodImage from '../asests/FoodImage.jpg';
import todoImage from '../asests/TodoList.jpg';
import miniproject from '../styles/miniproject.css';

function MiniProjects() {
  return (
    <>
      <h1 className="project-heading text-center text-4xl font-bold text-gold-300 mb-8">Mini Projects</h1>
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {/* Educational Site */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={eduImage} alt="Educational Site" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-gold-200 mb-2">Educational Site</h3>
            <p className="project-description text-gray-300 text-sm mb-4">
              A modern education platform with responsive design and content modules.
            </p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">HTML</span>
              <span className="tech-badge bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">CSS</span>
              <span className="tech-badge bg-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded-full">JavaScript</span>
            </div>
          </div>
        </div>

        {/* Food Website */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={foodImage} alt="Food Website" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-gold-200 mb-2">Food Website</h3>
            <p className="project-description text-gray-300 text-sm mb-4">
              A restaurant landing page featuring menu, gallery, and contact forms.
            </p>
            <div className="tech-badges flex flex-wrap gap-2">
              <span className="tech-badge bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
              <span className="tech-badge bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Todo List */}
        <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <img src={todoImage} alt="Todo App" className="project-image w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="project-title text-xl font-semibold text-gold-200 mb-2">Todo List</h3>
            <p className="project-description text-gray-300 text-sm mb-4">
              Simple todo app to manage tasks, edit, and delete with localStorage.
            </p>
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

export default MiniProjects;
