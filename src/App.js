import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
	Navbar,
	Nav,
	Container,
	Button,
	Row,
	Col,
	Image,
	Card,
} from "react-bootstrap";
import News from "./pages/News";
import Collaborator from "./Collaborator";

function App() {
	// plceholder data for cards
	const collaborators = [
		{ id: 1, name: "Penda" },
		{ id: 2, name: "Veikko" },
		{ id: 3, name: "Mikey" },
		{ id: 4, name: "Azor" },
		{ id: 5, name: "Jose" },
	];

	return (
		<div className="App">
			<Router>
				<header>
					<Navbar
						bg="dark"
						expand="lg"
						className="bg-body-tertiary"
						data-bs-theme="dark"
					>
						<Container>
							<Navbar.Brand href="#home">
								React-Bootstrap
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<Nav.Link as={Link} to="/">
										Home
									</Nav.Link>
									<Nav.Link as={Link} to="/news">
										News
									</Nav.Link>
									<Nav.Link as={Link} to="/events">
										Events
									</Nav.Link>
									<Nav.Link as={Link} to="/forum">
										Forums
									</Nav.Link>
									<Nav.Link as={Link} to="/profile">
										Profile
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					<div>
						<Routes>
							<Route path="/news" element={<News />} />
						</Routes>
					</div>
				</header>
			</Router>
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
								Documentation and examples for opting images
								into responsive behavior (so they never become
								wider than their parent) and add lightweight
								styles to them—all via classes.
							</p>
							<Button variant="outline-secondary">Go to</Button>
						</Col>
					</Row>
					<Row className="px-4 my-5">
						<Col sm={5}>
							<h1 class="font-weight-light">Events</h1>
							<p class="mt-4">
								Documentation and examples for opting images
								into responsive behavior (so they never become
								wider than their parent) and add lightweight
								styles to them—all via classes.
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
								Documentation and examples for opting images
								into responsive behavior (so they never become
								wider than their parent) and add lightweight
								styles to them—all via classes.
							</p>
							<Button variant="outline-secondary">Go to</Button>
						</Col>
					</Row>
					<Row className="px-4 my-5">
						<Col sm={5}>
							<h1 class="font-weight-light">Forums</h1>
							<p class="mt-4">
								Documentation and examples for opting images
								into responsive behavior (so they never become
								wider than their parent) and add lightweight
								styles to them—all via classes.
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

          {/* card for collaborators section */}
					<Card className="text-center bg-secondary text-white my-5 py-3">
						<Card.Body>
							<h1>Collaborators</h1>
						</Card.Body>
					</Card>

          {/* row of collaborator cards */}
					<Row>
						{collaborators.map((card) => (
							<Col>
								<Collaborator key={card.id} name={card.name} />
							</Col>
						))}
						;
						
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
