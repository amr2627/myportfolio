import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const skills = {
  Frontend: ['React', 'Aurelia', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
  Backend: ['Java', 'Spring Boot', 'REST APIs'],
  Database: ['MySQL', 'JPA'],
  DevOps: ['AWS EC2', 'Docker', 'Git', 'GitHub'],
  Tools: ['Postman', 'Swagger', 'VS Code']
};

const Skills = () => {
  return (
    <div className="bg-light py-5" id="skills">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          {Object.entries(skills).map(([category, items], idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <h5>{category}</h5>
              {items.map((skill, i) => (
                <Badge key={i} bg="secondary" className="me-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
