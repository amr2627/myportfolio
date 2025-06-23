import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className="py-5" id="contact">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>

          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
        <div className="text-center mt-4">
          <h5>Connect with me:</h5>
          <a
    href="https://www.linkedin.com/in/amarsalunke27"
    target="_blank"
    rel="noopener noreferrer"
    className="me-3"
  >
    <img
      src="/icons/linkedin.png"
      alt="LinkedIn"
      width="36"
      height="36"
      style={{ borderRadius: '4px', transition: 'transform 0.2s ease' }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    />
  </a>

  <a
    href="https://www.naukri.com/mnjuser/profile"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/naukri.jpg"
      alt="Naukri"
      width="36"
      height="36"
      style={{ borderRadius: '4px', transition: 'transform 0.2s ease' }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)' )}
    />
  </a>

        </div>

      </Container>
    </div>
  );
};

export default Contact;
