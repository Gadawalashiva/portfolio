import React, { useRef, useEffect, useState } from "react";
import '../styles/myjourney.css'; 

function MyJourney() {
  const lineRef = useRef(null);
  const wrapperRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const updateConnectingLine = () => {
    if (
      !lineRef.current ||
      !wrapperRef.current ||
      !educationRef.current ||
      !experienceRef.current
    ) return;

    const eduMarker = educationRef.current.querySelector('.section-marker');
    const expMarker = experienceRef.current.querySelector('.section-marker');

    if (!eduMarker || !expMarker) {
      lineRef.current.style.height = '0px';
      lineRef.current.style.top = '0px';
      return;
    }
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const eduRect = eduMarker.getBoundingClientRect();
    const expRect = expMarker.getBoundingClientRect();
    const eduCenter = eduRect.top + eduRect.height / 2 - wrapperRect.top;
    const expCenter = expRect.top + expRect.height / 2 - wrapperRect.top;


    const lineTop = eduCenter;
    const lineHeight = expCenter - eduCenter;

    lineRef.current.style.top = `${lineTop}px`;
    lineRef.current.style.height = `${lineHeight}px`;
  };

  useEffect(() => {
    
    const sectionObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const eduObserver = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => setEducationVisible(entry.isIntersecting));
    }, sectionObserverOptions);

    const expObserver = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => setExperienceVisible(entry.isIntersecting));
    }, sectionObserverOptions);

    if (educationRef.current) eduObserver.observe(educationRef.current);
    if (experienceRef.current) expObserver.observe(experienceRef.current);

    window.addEventListener('scroll', updateConnectingLine);
    window.addEventListener('resize', updateConnectingLine);
    updateConnectingLine();

    return () => {
      if (educationRef.current) eduObserver.unobserve(educationRef.current);
      if (experienceRef.current) expObserver.unobserve(experienceRef.current);
      window.removeEventListener('scroll', updateConnectingLine);
      window.removeEventListener('resize', updateConnectingLine);
    };
  }, []);

  useEffect(() => {
    updateConnectingLine();
  }, [educationVisible, experienceVisible]);

  const lineClass = `connecting-line${educationVisible && experienceVisible ? ' visible' : ''}`;

  return (
    <div className="my-journey-page">
      <h1 className="journey-main-heading">My Journey</h1>
      <div ref={wrapperRef} className="timeline-wrapper">
        <div ref={lineRef} className={lineClass}></div>
        <div
          ref={educationRef}
          className={`journey-section education-section ${educationVisible ? 'visible' : ''}`}
        >
          <div className="section-title-left">
            <h2>My Education</h2>
            <div className="section-marker"></div>
          </div>
          <div className="section-details-right">
            <div className="journey-card">
              <h4>Bachelor Of Engineering</h4>
              <p>Electronics and Communication Engineering</p>
              <p className="institution">VJIT</p>
            </div>
            <div className="journey-card">
              <h4>Intermediate (11th-12th Grade)</h4>
              <p className="institution">TSWREIS</p>
            </div>
            <div className="journey-card">
              <h4>SSC (10th Grade)</h4>
              <p className="institution">TSWREIS</p>
            </div>
          </div>
        </div>

        <div
          ref={experienceRef}
          className={`journey-section experience-section ${experienceVisible ? 'visible' : ''}`}
        >
          <div className="section-title-left">
            <h2>Software Developer Intern</h2>
            <div className="section-marker"></div>
          </div>
          <div className="section-details-right  card-right">
            <div className="journey-card">
              <h4>Greemus Software Technologies</h4>
              <ul>
                <li>Developed backend applications collaborating with team members</li>
                <li>Built and maintained backend applications using Express.js and TypeScript</li>
                <li>Worked with Backend services like Prisma and Supabase</li>
                <li>Created Protected routes and role-based access control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJourney;
