import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <div className="bg-white py-5" id="projects">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          <Col md={6} lg={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/300x150" />
              <Card.Body>
                <Card.Title>E-Home Services</Card.Title>
                <Card.Text>
                  Full-stack web app with Spring Boot, React, MySQL, and AWS. Features role-based login and shopping features.
                </Card.Text>
                <Button variant="primary" href="https://github.com/amr2627" target="_blank">GitHub</Button>{' '}
                <Button variant="outline-secondary" disabled>Live Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
