import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="py-5 text-center hero-bg text-white" id="hero">

      <Container>
        <h1 className="display-4">Hi, I'm Amar Salunke</h1>
        <p className="lead">Full Stack Developer</p>
        <a href="/resume.pdf" download className="btn btn-primary mt-3 resume-btn">
  Download Resume
</a>

      </Container>
    </div>
  );
};

export default Hero;
