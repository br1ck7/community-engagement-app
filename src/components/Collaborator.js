import { Card } from "react-bootstrap";
function Collaborator(props) {
	return (
		<Card style={{ width: "14rem" }}>
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title className="text-center">{props.name}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Collaborator;
