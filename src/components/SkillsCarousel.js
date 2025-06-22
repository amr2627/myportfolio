import React from 'react';
import './SkillsCarousel.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux Toolkit',
  'Spring Boot', 'MySQL', 'Axios', 'Bootstrap', 'Git',
  'GitHub', 'TypeScript', 'Postman', 'Aurelia', 'AWS', 'Data Structures', 'TeamCity', 'Octopus Deploy'
];

const SkillsCarousel = () => {
  return (
    <div className="skills-carousel-section" id="skills">
      <h2 className="text-center section-title mb-4 text-white">Skills</h2>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...skills, ...skills].map((skill, index) => (
            <span className="skill-pill" key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
