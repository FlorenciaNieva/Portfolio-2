import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <Container fluid className="container-home-background">
        <Container>
          <Row>
            <Col>
              <h3 className="sub-title-home">Hi! I'm</h3>
              <Col className="d-flex text-animation">
                <h1>Flor Nieva</h1>
              </Col>
              <h3
                className="sub-title-home"
                style={{ fontFamily: "Dejavu Sans" }}
              >
                Frontend Developer
              </h3>
              <Col>
                <Button className="button-animation" href="#skills">
                  <span className="button-text">View Projects</span>
                  <div className="fill-container"></div>
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
