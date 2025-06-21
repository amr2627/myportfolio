import React from 'react';
import { Container } from 'react-bootstrap';

const Education = () => {
  return (
    <div className="py-5 bg-white" id="education">
      <Container>
        <h2 className="text-center mb-4">Education</h2>

        <div className="mb-4">
          <h5 className="mb-1">PG Diploma in Advanced Computing (C-DAC)</h5>
          <p className="mb-0">Sunbeam Institute of Information Technology, Pune</p>
          <small className="text-muted">Feb 2022 – Jan 2023 | Percentage: 74.2%</small>
        </div>

        <div>
          <h5 className="mb-1">B.E. in Computer Science</h5>
          <p className="mb-0">AISSMS Institute of Information Technology, Pune</p>
          <small className="text-muted">Aug 2016 – Oct 2020 | CGPA: 7.6</small>
        </div>
      </Container>
    </div>
  );
};

export default Education;
