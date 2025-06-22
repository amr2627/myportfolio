import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css'; // Optional for custom styles

const Hero = () => {
  return (
    <div className="py-5 hero-bg text-white" id="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h1 className="display-4">Hi, I'm Amar Salunke</h1>
            <p className="lead">Full Stack Developer</p>
          </Col>
          <Col md={4} className="text-md-end text-center mt-4 mt-md-0">
            <a href="/resume.pdf" download>
              <Button className="resume-btn" variant="primary">Download Resume</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

