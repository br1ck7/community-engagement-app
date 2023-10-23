import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// page imports
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
	return (
		<>
			<Router>
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

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<News />} />
				</Routes>
				<div className="App">
					<br></br>
					<br></br>

					<footer class="py-5 my-5 bg-dark">
						<Container className="px-4">
							<p class="text-center text-white">
								Copyright &copy; Your Website 2023
							</p>
						</Container>
					</footer>
				</div>
			</Router>
		</>
	);
}

export default App;
