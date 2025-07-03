import React from 'react';
import AllProjects from '../Pages/Allprojects';

const ProjectsSection = React.forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const headingStyle = {
    textAlign: "center",
    backgroundColor: "black", 
    color: "gold",
    padding: "10px",
    marginTop: "20px",
    marginBottom: "0px",
    transition: "color 0.3s ease-in-out",
    cursor: "pointer",
  };

  const headingHoverStyle = {
    color: "darkgoldenrod",
  };

  return (
    <section id="projects" ref={ref} className="bg-black text-white min-h-screen py-10">
      <h2
        style={isHovered ? { ...headingStyle, ...headingHoverStyle } : headingStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-4xl font-bold rounded-lg shadow-lg mb-8"
      >
        My Projects
      </h2>
      <div className="projects-content">
        <AllProjects />
      </div>
    </section>
  );
});

export default ProjectsSection;
