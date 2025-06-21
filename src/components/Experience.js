import React from 'react';
import { Container } from 'react-bootstrap';

const WorkExperience = () => {
  return (
    <div className="py-5 bg-light" id="experience">
      <Container>
        <h2 className="text-center mb-4">Work Experience</h2>

        <div className="mb-4">
          <h5 className="mb-1">Software Engineer – Cavista Technologies</h5>
          <p className="mb-0">Feb 2023 – Present</p>
          <ul>
            <li>Built responsive UIs in React and Aurelia, integrating Auth0 for authentication.</li>
            <li>Worked on REST API development using Spring Boot and MySQL.</li>
            <li>Led a team of 4 engineers, improving delivery speed by 30%.</li>
          </ul>
        </div>

        <div>
          <h5 className="mb-1">System Engineer – Infosys</h5>
          <p className="mb-0">Jun 2021 – Nov 2021</p>
          <ul>
            <li>Developed modular and responsive React components.</li>
            <li>Worked on HTML, CSS, and JavaScript UI implementation.</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default WorkExperience;
