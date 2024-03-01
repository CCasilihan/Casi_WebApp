import React, { useState } from "react";
import {  Row, Col, Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import img4 from './images/cam.jpg';
import img9 from './images/cam1.jpg';
import img10 from './images/facebook.jpeg';
import img12 from './images/gmail.png';
// import img13 from './images/swim.jpg';
// import img14 from './images/car.jpg';

function Contact() {
  const [message, setMessage] = useState(""); // State to manage message

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here
    // Example: You can set a success message to display
    setMessage("Form submitted successfully!");
  };

  return (
    <div style={{ marginTop: '30px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', fontSize: '40px', color: 'white',  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)', }}>Get in Touch</h2>
      <p style={{ fontSize: '1.2rem', fontWeight: '', textAlign: 'center', color: 'white',  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)', }}>
        Hello there! Whether you have a question, a collaboration idea, or just want to say hello,
        I'd love to hear from you. Feel free to reach out using any of the methods below:
      </p> 

      <Row>
        <Col md="9" className="md-0 mb-5">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <FormLabel className="white-text">Your name</FormLabel>
                  <FormControl type="text" id="contact-name" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <FormLabel className="white-text">Your email</FormLabel>
                  <FormControl type="text" id="contact-email" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <FormLabel className="white-text">Subject</FormLabel>
                  <FormControl type="text" id="contact-subject" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <FormLabel className="white-text">Your message</FormLabel>
                  <FormControl as="textarea" id="contact-message" />
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center text-md-left">
              <Button variant="primary" type="submit">
                Send
              </Button>
            </div>
            <p>{message}</p>
          </Form>
        </Col>
        <Col md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt white-text" /> 
              <p className="white-text">Beberon, San Fernado Camarines Sur</p>
            </li>
            <li>
              <i className="fas fa-phone white-text mt-4" />
              <p className="white-text">+63 994-9224-885</p>
            </li>
            <li>
              <i className="fas fa-envelope white-text mt-4" />
              <p className="white-text">casilihancharisse@gmail.com</p>
            </li>
          </ul>
        </Col>
      </Row>

       <div style={{ marginTop: '30px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', fontSize: '40px', color: 'white',  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)', }}>Visit My Social Media Account</h2>

      <div className="row" style={{ justifyContent: 'center', marginTop: '30px' }}>
        <div className="col"> 
          <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: '0 auto' }}>
            <img src={img4} alt="" style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} /> 
            <a href="https://www.facebook.com/charisse.casilihan/" target="_blank" rel="noopener noreferrer">
              <button style={{ marginTop: '20px', background: 'linear-gradient(to right, #1877F2, #1877F2, #1877F2)', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', border: 'none', fontSize: '18px', fontFamily: 'Arial', textTransform: 'uppercase' }}>
                <img src={img10} alt="Facebook" style={{ width: '20px', marginRight: '10px' }} />
                Facebook
              </button>
            </a>
          </div>
        </div>
        <div className="col"> 
          <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', margin: '0 auto' }}>
            <img src={img9} alt="" style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} /> 
            <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank" rel="noopener noreferrer">
              <button style={{ marginTop: '20px', background: 'linear-gradient(to right, #8B0000, #FFD34E, #006400)', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', border: 'none', fontSize: '18px', fontFamily: 'Arial', textTransform: 'uppercase' }}>
                <img src={img12} alt="Gmail" style={{ width: '20px', marginRight: '10px' }} />
                Gmail
              </button>
            </a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)',
                  display: 'block',
                  margin: '0 auto',
                  filter: 'grayscale(100%)',}}>
        {/* <p style={{ fontSize: '14px', color: '#666' }}>
          Contact: <br />
          <img src={img14} alt="Logo" style={{ width: '20px', marginRight: '5px' }} /> Zone 2, Beberon, <br /> San Fernando Camarines Sur <br /> Philippines<br /> 
          <img src={img13} alt="Logo" style={{ width: '10px', marginRight: '5px' }} /> 0994 922 4885
        </p> */}
      </div>
    </div>
    </div>
  );
}

export default Contact;
