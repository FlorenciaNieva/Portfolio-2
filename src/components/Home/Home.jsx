import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
