import React from 'react';
import './SkillsCarousel.css'; // Custom styles for animation

const skills = [
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'CSS', icon: '/icons/css.png' },
  { name: 'JavaScript', icon: '/icons/js.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Spring Boot', icon: '/icons/springboot.png' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'AWS', icon: '/icons/aws.png' },
];

const SkillsCarousel = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="text-center section-title mb-4 text-white">Skills</h2>
      <div className="slider">
        <div className="slide-track">
          {skills.concat(skills).map((skill, index) => (
            <div className="slide" key={index}>
              <img src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
