import React from "react";
import "../styles/aboutme.css";

function About() {
  const skillsLine1 = [
    "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "TypeScript",
    "Java", "Spring Boot (Learning)",
  ];
  const skillsLine2 = [
    "MongoDB", "ExpressJS", "Redux", "Git", "Figma", "Bootstrap",
    "Data Structures", "Algorithms (DSA)",
  ];

  const duplicatedSkills1 = [...skillsLine1, ...skillsLine1, ...skillsLine1];
  const duplicatedSkills2 = [...skillsLine2, ...skillsLine2, ...skillsLine2];
  const myHobbies = [
    "Reading Books",
    "Hiking in Nature",
    "Photography",
    "Cooking New Recipes",
    "Gaming (Casual)",
    "Learning New Technologies"
  ];


  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12062.640833933512!2d78.53088196613638!3d17.284237068492857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751436663640!5m2!1sen!2sin"; // THIS URL IS LIKELY INCORRECT AND WON'T DISPLAY A MAP

  return (
 
    <div id="aboutme" className="about-page">
  
      <div className="about-header">
        <h1>About Me</h1>
        <p className="subtitle">Get to Know Me</p>
        <div className="description">
          <p>
            Learn more about me, what I like,
          </p>
          <p>
            what I know and where I live.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="info-card">
            <h1>About me</h1>
          <div className="info-section">
            <h4>Experience</h4>
            <p>4 months of internship</p>
          </div>
          <div className="info-section">
            <h4>Education</h4>
            <p>B.Tech Electronics and Communication Engineering</p>
          </div>
          <div className="info-section">
            <h4>Location</h4>
            <p>Hyderabad, India</p>
          </div>
        </div>

       
        <div className="tech-card">
          <h3>My Tech Stack</h3>
          <div className="marquee-container">
      
            <div className="marquee marquee-left">
              <div className="marquee-content">
                {duplicatedSkills1.map((skill, index) => (
                  <span className="skill" key={`skill1-${index}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          
            <div className="marquee marquee-right">
              <div className="marquee-content">
                {duplicatedSkills2.map((skill, index) => (
                  <span className="skill" key={`skill2-${index}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

   
        <div className="hobbies-card">
          <h3>My Hobbies</h3>
          <ul>
            {myHobbies.map((hobby, index) => (
              <li key={index} className="hobby-item">
                {hobby}
              </li>
            ))}
          </ul>
        </div>

        <div className="map-card">
          <h3>Location</h3>
          <div className="map-embed-container">
            <iframe
              src={mapEmbedUrl} 
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Location on Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;