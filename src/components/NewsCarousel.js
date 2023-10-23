import {Container, Carousel, Image } from "react-bootstrap";

function NewsCarousel() {
	return (
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
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
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
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
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
