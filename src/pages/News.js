import React from "react";
import { Navbar, Container, Nav, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function News() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav" fill variant="tabs">
                  <Nav.Link as={Link} to="/app">Home</Nav.Link>
                  <Nav.Link as={Link} to="/">News</Nav.Link>
                  <Nav.Link as={Link} to="/events">Events</Nav.Link>
                  <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
                  <Nav.Link as={Link} to="/forum">Forums</Nav.Link>
                  <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    <br />
    <br />

    <main>
      <Container>
        <Carousel>
          <Carousel.Item interval={5000}>
          <Image
              className="d-block w-100"
              src="https://picsum.photos/900/400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <Image
              className="d-block w-100"
              src="https://picsum.photos/900/400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
          <Image
              className="d-block w-100"
              src="https://picsum.photos/900/400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </main>
    </div>
  )
}

export default News;