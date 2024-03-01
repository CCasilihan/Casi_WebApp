import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import About from "./About";
import Education from "./Elementary";
import Contact from "./Contact";
import Elementary from "./Elementary";
import HighSchool from "./HighSchool";
import SeniorHighSchool from "./SeniorHighSchool";
import College from "./College";
import { NavDropdown } from 'react-bootstrap';
import logo from './images/logocam1.png';

function App() {
  return (
    <div style={{ 
      backgroundImage: "url('https://wallpapercave.com/wp/wp1933338.jpg'), url('https://cdn.wallpapersafari.com/98/2/ECTAJo.gif')",
      backgroundPosition: "center, center",
      backgroundSize: "cover, cover",
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
  }}>
      <Router>
        <Navbar style={{ background: "none" }} variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"} style={{ display: "flex", alignItems: "center", color: "white" }}>
              <img src={logo} alt="Logo" style={{ width: "80px", height: "80px", marginRight: "20px" }} />
              <span style={{ fontFamily: "Brasilia Delight", fontStyle: "italic", fontSize: "40px" }}>Casi_Cam</span>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"} style={{ fontSize: "20px", fontFamily: "italic", color: "white" }}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/About"} style={{ fontSize: "20px", fontFamily: "italic", color: "white" }}>About</Nav.Link>
              <NavDropdown title="Education" id="basic-nav-dropdown" style={{ fontSize: "20px", fontFamily: "italic", color: "white" }} className="text-decleration-none text-white">
                <NavDropdown.Item as={Link} to={"/Elementary"}>Elementary</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/HighSchool"}>High School</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/SeniorHighSchool"}>Senior High School</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/College"}>College</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/Contact"} style={{ fontSize: "20px", fontFamily: "italic", color: "white" }}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/Contact" element={<Contact />} />       
                <Route path="/Elementary" element={<Elementary />} />
                <Route path="/HighSchool" element={<HighSchool />} />
                <Route path="/SeniorHighSchool" element={<SeniorHighSchool />} />
                <Route path="/College" element={<College />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
