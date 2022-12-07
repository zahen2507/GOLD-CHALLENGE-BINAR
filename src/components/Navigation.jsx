import * as React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imgLogo from '../assets/LOGO.png';

const Navigation = () => {
  return (
    <>
      <Navbar key={"sm"} bg="light" expand={"sm"} className="navbar1 fixed-top" style={{ backgroundColor: "#f1f3ff" }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={imgLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"sm"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#OurService">Our Service</Nav.Link>
                <Nav.Link href="#WhyUs">whyUs</Nav.Link>
                <Nav.Link href="#Faq">Testimonial</Nav.Link>
                <Nav.Link href="#Testimonial">FAQ</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  );
}

export default Navigation;