import { Container, Button, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Collaborator from "../components/Collaborator";
import eventsImg from "../assets/img/home/events.png";
import newsImg from "../assets/img/home/news.png";
import forumsImg from "../assets/img/home/forums.png";
import volunteerImg from "../assets/img/home/volunteer.png";

function Home() {
	// plceholder data for cards
	const collaborators = [
		{
			id: 1,
			name: "Penda",
			text: "UX Designer: Crafts a seamless app experience, blending creativity and usability for an intuitive and visually appealing interface.",
		},
		{
			id: 2,
			name: "Veikko",
			text: "Backend Developer: Technical architect optimizing app functionality and performance, ensuring a seamless and efficient user experience.",
		},
		{
			id: 3,
			name: "Mikey",
			text: "Content Moderator: Maintains a positive community vibe by moderating content and ensuring discussions align with community guidelines.",
		},
		{
			id: 4,
			name: "Azor",
			text: "Community Outreach: Connects the app with community needs, fostering collaboration with local organizations, leaders, and residents.",
		},
		{
			id: 5,
			name: "Jose",
			text: "Event Coordinator: Curates and organizes community events, ensuring smooth execution and memorable experiences that strengthen community bonds.",
		},
	];
	return (
		<div>
			<Container>
				<Row className="px-4 my-5">
					<Col sm={7}>
						<Image src={newsImg} fluid rounded className="" />
					</Col>
					<Col sm={5}>
						<h1 class="font-weight-light">News</h1>
						<p class="mt-4">
							Stay informed and connected with the latest
							happenings in your community. The News section
							brings you real-time updates, announcements, and
							stories that matter to you. Whether it's community
							achievements, upcoming projects, or important
							announcements, this is your go-to source for staying
							in the loop.
						</p>
						<Button
							variant="outline-secondary"
							as={Link}
							to="/news"
						>
							Go to
						</Button>
					</Col>
				</Row>
				<Row className="px-4 my-5">
					<Col sm={5}>
						<h1 class="font-weight-light">Events</h1>
						<p class="mt-4">
							Explore and participate in community events that
							bring people together. The Events section showcases
							a calendar of local gatherings, activities, and
							festivities. From town hall meetings to cultural
							celebrations, find events that align with your
							interests and schedule. Stay connected with your
							community and be part of the vibrant social fabric
							that makes your neighborhood special.
						</p>
						<Button
							variant="outline-secondary"
							as={Link}
							to="/events"
						>
							Go to
						</Button>
					</Col>
					<Col sm={7}>
						<Image src={eventsImg} fluid rounded className="" />
					</Col>
				</Row>
				<Row className="px-4 my-5">
					<Col sm={7}>
						<Image src={volunteerImg} fluid rounded className="" />
					</Col>
					<Col sm={5}>
						<h1 class="font-weight-light">Volunteer</h1>
						<p class="mt-4">
							Make a meaningful impact by getting involved in
							community initiatives. The Volunteer section
							provides opportunities for you to contribute your
							time and skills to local projects, charities, and
							events. Discover a variety of volunteering options,
							connect with organizations, and be a catalyst for
							positive change in your community.
						</p>
						<Button
							variant="outline-secondary"
							as={Link}
							to="/volunteer"
						>
							Go to
						</Button>
					</Col>
				</Row>
				<Row className="px-4 my-5">
					<Col sm={5}>
						<h1 class="font-weight-light">Forums</h1>
						<p class="mt-4">
							Engage in vibrant discussions and connect with
							fellow community members through the Forums. Share
							your ideas, ask questions, and participate in
							conversations on a wide range of topics. Whether
							it's discussing local issues, sharing advice, or
							collaborating on community initiatives, the Forums
							foster a sense of community and encourage open
							dialogue.
						</p>
						<Button
							variant="outline-secondary"
							as={Link}
							to="/forums"
						>
							Go to
						</Button>
					</Col>
					<Col sm={7}>
						<Image src={forumsImg} fluid rounded className="" />
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
							<Collaborator key={card.id} name={card.name} text={card.text} />
						</Col>
					))}
					;
				</Row>
			</Container>
		</div>
	);
}

export default Home;
