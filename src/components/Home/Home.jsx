import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

export default function Home({ menuOpen }) {
  return (
    <>
      <Container fluid className="container-home-background">
        <Container className="container-home">
          <Row>
            
              <Col className={menuOpen ? "menu-open" : "menu-close"}>
                <h3 className="subtitle-home">Hi! My name is</h3>
                <Col className="d-flex text-animation">
                  <h1>Florencia Nieva</h1>
                </Col>
                <h3 className="description-home">Frontend Developer</h3>
                <Col>
                  <AnimatedButton route="/about-me" content="See More About Me" />
                </Col>
              </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
