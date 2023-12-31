import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNav() {
	return (
		<Navbar
			bg="dark"
			expand="lg"
			className="bg-body-tertiary"
			data-bs-theme="dark"
		>
			<Container>
				<Navbar.Brand href="/">Communiverse</Navbar.Brand>
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
						<Nav.Link as={Link} to="/addarticle">
							Add Article
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CustomNav;
