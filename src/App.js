import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button,
        Container,
        Nav,
        Navbar,
        Row,
        Col,
        Image,
        Card} from "react-bootstrap"

function App() {
//Veikko Kapiya is a sussy chungus
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Communiverse</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#volunteer">Volunteer</Nav.Link>
                <Nav.Link href="Profile.js">Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <br></br>
      <br></br>
      
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
            />
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-light">News</h1>
              <p class="mt-4">
              Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
              </p>
              <Button variant="outline-secondary">Go to</Button>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col sm={5}>
              <h1 class="font-weight-light">Events</h1>
              <p class="mt-4">
              Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
              </p>
              <Button variant="outline-secondary">Go to</Button>
            </Col>
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
            />
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
            />
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-light">Volunteer</h1>
              <p class="mt-4">
              Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
              </p>
              <Button variant="outline-secondary">Go to</Button>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col sm={5}>
              <h1 class="font-weight-light">Forums</h1>
              <p class="mt-4">
              Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
              </p>
              <Button variant="outline-secondary">Go to</Button>
            </Col>
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=""
            />
            </Col>
          </Row>
            <Card className="text-center bg-secondary text-white my-5 py-3">
              <Card.Body>
                <h1>Collaborators</h1>
              </Card.Body>
            </Card>

          <Row>
            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/100/80" />
                <Card.Body>
                <Card.Title className="text-center">Penda</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/100/80" />
                <Card.Body>
                <Card.Title className="text-center">Veikko</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/100/80" />
                <Card.Body>
                <Card.Title className="text-center">Mikey</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/100/80" />
                <Card.Body>
                <Card.Title className="text-center">Azor</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://picsum.photos/100/80" />
                <Card.Body>
                <Card.Title className="text-center">Jose</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          
        </Container>
      </main>

      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class="text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </Container>
      </footer>

    </div>
  );
}

export default App;
