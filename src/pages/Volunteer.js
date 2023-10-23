import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Volunteer() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav" fill variant="tabs">
                  <Nav.Link as={Link} to="/app">Home</Nav.Link>
                  <Nav.Link as={Link} to="/news">News</Nav.Link>
                  <Nav.Link as={Link} to="/events">Events</Nav.Link>
                  <Nav.Link as={Link} to="/">Volunteer</Nav.Link>
                  <Nav.Link as={Link} to="/forum">Forums</Nav.Link>
                  <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>
  )
}

export default Volunteer;