import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-light py-5 text-center" id="hero">
      <Container>
        <h1 className="display-4">Hi, I'm Amar Salunke</h1>
        <p className="lead">Full Stack Developer | React | Spring Boot | MySQL | AWS</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
          Download Resume
        </a>
      </Container>
    </div>
  );
};

export default Hero;
