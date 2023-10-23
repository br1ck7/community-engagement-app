import {
	Container,
	Button,
	Row,
	Col,
	Image,
	Card,
} from "react-bootstrap";
import Collaborator from "../Collaborator";

function Home() {
	// plceholder data for cards
	const collaborators = [
		{ id: 1, name: "Penda" },
		{ id: 2, name: "Veikko" },
		{ id: 3, name: "Mikey" },
		{ id: 4, name: "Azor" },
		{ id: 5, name: "Jose" },
	];
	return (
		<div>
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
							Documentation and examples for opting images into
							responsive behavior (so they never become wider than
							their parent) and add lightweight styles to them—all
							via classes.
						</p>
						<Button variant="outline-secondary">Go to</Button>
					</Col>
				</Row>
				<Row className="px-4 my-5">
					<Col sm={5}>
						<h1 class="font-weight-light">Events</h1>
						<p class="mt-4">
							Documentation and examples for opting images into
							responsive behavior (so they never become wider than
							their parent) and add lightweight styles to them—all
							via classes.
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
							Documentation and examples for opting images into
							responsive behavior (so they never become wider than
							their parent) and add lightweight styles to them—all
							via classes.
						</p>
						<Button variant="outline-secondary">Go to</Button>
					</Col>
				</Row>
				<Row className="px-4 my-5">
					<Col sm={5}>
						<h1 class="font-weight-light">Forums</h1>
						<p class="mt-4">
							Documentation and examples for opting images into
							responsive behavior (so they never become wider than
							their parent) and add lightweight styles to them—all
							via classes.
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
		</div>
	);
}

export default Home;
