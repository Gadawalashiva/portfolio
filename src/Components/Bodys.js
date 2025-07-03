import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import SkillCube from "./Skillcube";
import '../styles/body.css';

function Body() {
 
  const [typedTextTop, setTypedTextTop] = useState("");
  const [isDeletingTop, setIsDeletingTop] = useState(false);
  const [loopNumTop, setLoopNumTop] = useState(0);
  const [typingSpeedTop, setTypingSpeedTop] = useState(150);

  const [typedText2, setTypedText2] = useState("");
  const [isDeleting2, setIsDeleting2] = useState(false);
  const [loopNum2, setLoopNum2] = useState(0);
  const [typingSpeed2, setTypingSpeed2] = useState(150);

 
  const toRotateTop = [
    { prefix: "I'm ", suffix: "Shiva" },
  ];


  const toRotate2 = [
    { prefix: "I am ", suffix: "fullstack developer" },
    { prefix: "I am ", suffix: "freelance" }
  ];

  const eraseDelay = 1000;
  const typeDelay = 500;


  useEffect(() => {
    let ticker = setInterval(() => {
      tickTop();
    }, typingSpeedTop);

    return () => {
      clearInterval(ticker);
    };
  }, [typedTextTop, isDeletingTop, typingSpeedTop, loopNumTop]);


  useEffect(() => {
    let ticker = setInterval(() => {
      tick2();
    }, typingSpeed2);

    return () => {
      clearInterval(ticker);
    };
  }, [typedText2, isDeleting2, typingSpeed2, loopNum2]);


  const tickTop = () => {
    const i = loopNumTop % toRotateTop.length;
    const currentPhrase = toRotateTop[i];
    const fullText = currentPhrase.prefix + currentPhrase.suffix;

    let updatedText = "";

    if (isDeletingTop) {
      updatedText = fullText.substring(0, typedTextTop.length - 1);
    } else {
      updatedText = fullText.substring(0, typedTextTop.length + 1);
    }

    setTypedTextTop(updatedText);

    if (isDeletingTop) {
      setTypingSpeedTop(prevSpeed => prevSpeed / 2);
    }

    if (!isDeletingTop && updatedText === fullText) {
      setTypingSpeedTop(eraseDelay);
      setIsDeletingTop(true);
    } else if (isDeletingTop && updatedText === '') {
      setIsDeletingTop(false);
      setLoopNumTop(loopNumTop + 1);
      setTypingSpeedTop(typeDelay);
    }
  };

  // Logic for the bottom typing animation (unchanged)
  const tick2 = () => {
    const i = loopNum2 % toRotate2.length;
    const currentPhrase = toRotate2[i];
    const fullText = currentPhrase.prefix + currentPhrase.suffix;

    let updatedText = "";

    if (isDeleting2) {
      updatedText = fullText.substring(0, typedText2.length - 1);
    } else {
      updatedText = fullText.substring(0, typedText2.length + 1);
    }

    setTypedText2(updatedText);

    if (isDeleting2) {
      setTypingSpeed2(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting2 && updatedText === fullText) {
      setTypingSpeed2(eraseDelay);
      setIsDeleting2(true);
    } else if (isDeleting2 && updatedText === '') {
      setIsDeleting2(false);
      setLoopNum2(loopNum2 + 1);
      setTypingSpeed2(typeDelay);
    }
  };

  const themeColors = {
    primaryBg: 'var(--primary-bg)',
    secondaryBg: 'var(--secondary-bg)',
    textColorPrimary: 'var(--text-color-primary)',
    accentColor: 'var(--accent-color)',
    hoverBg: 'var(--hover-bg)',
    buttonTextDark: 'var(--button-text-dark)',
  };

  
  const renderGoldTypedTextTop = () => {
    const i = loopNumTop % toRotateTop.length;
    const currentPhrase = toRotateTop[i];
    const prefixLength = currentPhrase.prefix.length;

    const currentTypedLength = typedTextTop.length;

    let prefixPart = "";
    let suffixPart = "";

    if (currentTypedLength <= prefixLength) {
      prefixPart = typedTextTop;
    } else {
      prefixPart = currentPhrase.prefix;
      suffixPart = typedTextTop.substring(prefixLength);
    }

    return (
      <>
        {prefixPart}
        <span className="gold-text">{suffixPart}</span>
      </>
    );
  };

 
  const renderGoldTypedText = () => {
    const i = loopNum2 % toRotate2.length;
    const currentPhrase = toRotate2[i];
    const prefixLength = currentPhrase.prefix.length;

    const currentTypedLength = typedText2.length;

    let prefixPart = "";
    let suffixPart = "";

    if (currentTypedLength <= prefixLength) {
      prefixPart = typedText2;
    } else {
      prefixPart = currentPhrase.prefix;
      suffixPart = typedText2.substring(prefixLength);
    }

    return (
      <>
        {prefixPart}
        <span className="gold-text">{suffixPart}</span>
      </>
    );
  };

  return (

    <div id="home" className="BodyWrapper">
      <h4 className="Freelance"><span>Available For</span> Freelance Projects</h4>

      <div className="Container">
        <div className="Information">
       
          <div className="top-dynamic-text">
            <h2>
              {renderGoldTypedTextTop()}
              <span className="cursor top-cursor">|</span> 
            </h2>
          </div>


          <p>
            I'm a 21-year-old ECE student and aspiring full-stack developer.
            I'm skilled <br />in React.js, and the Backend, with a passion for building creative and <br /> efficient applications.
            Currently, I'm focused on honing my development <br /> skills and exploring new skills.
          </p>
          <div className="secondary-dynamic-text">
            <h3>
              {renderGoldTypedText()}
              <span className="cursor secondary-cursor">|</span>
            </h3>
          </div>

          <div className="body-socialLinks">
            <a className="fonts" href="https://github.com/Gadawalashiva" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="Resume" href="https://drive.google.com/file/d/1lDmGMxDo1iJOGwSKUv_GWIJpB4sN8ket/view" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFile} /> Resume
            </a>
          </div>
        </div>
        <div className="SkillCubeWrapper">
          <SkillCube /> 
        </div>
      </div>
    </div>
  );
}

export default Body;