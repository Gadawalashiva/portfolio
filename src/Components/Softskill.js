import React, { useRef, useEffect, useState } from "react";
import '../styles/softskill.css'; 

function Softskill() {
  const skillsContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const softSkills = [
    { id: 1, name: "Communication 🗣️" },
    { id: 2, name: "Teamwork 🤝" },
    { id: 3, name: "Problem-Solving 🤔" },
    { id: 4, name: "Adaptability 💡" },
    { id: 5, name: "Time Management ⏱️" },
    { id: 6, name: "Leadership ✨" },
    { id: 7, name: "Critical Thinking 🧠" },
    { id: 8, name: "Active Listening 👂" },
    { id: 9, name: "Empathy 💖" },
    { id: 10, name: "Creativity 🌈" },
  ];

  useEffect(() => {
    const currentRef = skillsContainerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); 

  return (
    <div className="softskills-page" ref={skillsContainerRef}>
      <div className={`skills-grid ${isVisible ? 'visible' : ''}`}>
        {softSkills.map((skill, index) => (
          <div
            key={skill.id}
            className="softskill-item"
            style={{ transitionDelay: `${index * 0.1}s` }} 
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Softskill;
