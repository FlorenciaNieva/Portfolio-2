import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowButton from "../ArrowButton/ArrowButton";

export default function Home({ menuOpen }) {
  return (
    <>
      <Container fluid className="background d-flex align-items-center min-vh-100 pt-5">
        <Container className="pt-5">
          <Row>
            <Col className={menuOpen ? "menu-open" : "menu-close"}>
              <h3 className="fs-5">Hi! My name is</h3>
              <Col className="d-flex text-animation">
                <h1>Florencia Nieva</h1>
              </Col>
              <h3 className="fs-1">Frontend Developer</h3>
              <Col>
                <ArrowButton route="/about-me" content="See More About Me" />
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
