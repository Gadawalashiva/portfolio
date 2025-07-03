import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

import '../styles/skillcube.css';

const SkillCube = ({
  themeColors = {
    secondaryBg: '#222',
    accentColor: '#FFD700',
    buttonTextDark: '#000',
  }
}) => {
  const skills = [
    { name: "HTML", icon: faHtml5 },
    { name: "Node.js", icon: faNodeJs },
    { name: "CSS", icon: faCss3Alt },
    { name: "Express", icon: faCode },
    { name: "JavaScript", icon: faJs },
    { name: "MongoDB", icon: faDatabase },
  ];

  const renderFace = (skill, index) => {
    const faceClasses = [
      "front", "back", "right", "left", "top", "bottom"
    ];

    return (
      <div
        key={index}
        className={`face ${faceClasses[index]}`}
        style={{
          '--face-bg': themeColors.secondaryBg,
          '--face-border-color': themeColors.accentColor,
          '--face-text-color': themeColors.accentColor,
          '--face-box-shadow-color': themeColors.accentColor,
          '--face-hover-bg-glow': themeColors.accentColor,
          '--face-text-color-hover': themeColors.buttonTextDark,
        }}
      >
        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
        <span className="skill-text">{skill.name}</span>
      </div>
    );
  };

  return (
    <div className="cube-container">
      <div className="cube">
        {skills.map((skill, index) => renderFace(skill, index))}
      </div>
    </div>
  );
};

export default SkillCube;
