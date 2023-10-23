import { Card } from "react-bootstrap";
function Collaborator(props) {
	return (
		<Card style={{ width: "14rem" }}>
			<Card.Img variant="top" src="https://picsum.photos/100/80" />
			<Card.Body>
				<Card.Title className="text-center">{props.name}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Collaborator;
