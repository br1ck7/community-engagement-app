import { Container, Carousel, Image } from "react-bootstrap";
import ai from "../assets/img/articles/ai.png";
import space from "../assets/img/articles/space.png";
import quantum from "../assets/img/articles/quantum.png";

function NewsCarousel() {
	return (
		<Container>
			<Carousel>
				<Carousel.Item interval={5000}>
					<Image
						className="d-block w-100 img-fluid max-height-400 max-width-900"
						src={quantum}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>
							Quantum Computing: Unraveling the Power of
							Superposition
						</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<Image
						className="d-block w-100 img-fluid max-height-400 max-width-900"
						src={ai}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>
							Artificial Intelligence in Healthcare:
							Revolutionizing Patient Care
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<Image
						className="d-block w-100 img-fluid max-height-400 max-width-900"
						src={space}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>
							Beyond the Stars: The Mysteries of Dark Matter
							Explored
						</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default NewsCarousel;
