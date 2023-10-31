import React from "react";
import NewsCarousel from "../components/NewsCarousel";
import { Card, Container, Row, Col } from "react-bootstrap";

function News() {
  return (
    <>
      <div>
        <NewsCarousel />
      </div>

      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/160/70" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default News;
