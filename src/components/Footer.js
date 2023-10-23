import { Container } from "react-bootstrap";

function Footer() {
	return (
		<>
			<footer class="py-5 my-5 bg-dark">
				<Container className="px-4">
					<p class="text-center text-white">
						Copyright &copy; Your Website 2023
					</p>
				</Container>
			</footer>
		</>
	);
}

export default Footer;
