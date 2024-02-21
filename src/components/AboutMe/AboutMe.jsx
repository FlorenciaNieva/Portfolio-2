import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImageProfile from "../../assets/images/image-profile.png";
import Skills from "../Skills/Skills";
import Button from "react-bootstrap/Button";
import ArrowButton from "../ArrowButton/ArrowButton";
import SoftSkills from "../SoftSkills/SoftSkills";

export default function AboutMe({ menuOpen }) {
  return (
    <Container fluid className="container-about pb-4">
      <Container className="pb-5">
        <Row className={menuOpen ? "menu-open" : "menu-close"}>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image
              src={ImageProfile}
              alt="profile image"
              roundedCircle
              className="img-profile"
            />
            <Button className="button-animation mb-5" href="#skills">
              <span className="button-text">Download CV</span>
              <div className="fill-container"></div>
            </Button>
          </Col>
          <Col className="about-me">
            <h2 className="text-gradient">ABOUT ME</h2>
            <p>
              Hello! my name is Florencia Nieva. I am a passionate
              Frontend Developer Junior residing in Buenos Aires, Argentina. I
              graduated in the Frontend Development program at ADA ITW, and I am
              constantly expanding my knowledge in this field. Currently, I am
              at an A2 level in the English language and continue to refine my
              skills in it.
            </p>
            <p>
              I am actively seeking job opportunities that will allow me to
              deepen my skills and continue learning.
            </p>
            <hr className="my-4" />
            <Row>
              <Col>
                <p>
                  <span className="letter-aqua">
                    Name:
                  </span>{" "}
                  Florencia Nieva
                </p>
                <p>
                  <span className="letter-aqua">
                    Age:
                  </span>{" "}
                  18
                </p>
              </Col>
              <Col>
                <p>
                  <span className="letter-aqua">
                    Nationality:
                  </span>{" "}
                  Argentinian
                </p>
                <p>
                  <span className="letter-aqua">
                    English Level:
                  </span>{" "}
                  A2
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <SoftSkills />
      <Skills />
      <Container>
        <ArrowButton route="/projects" content="Go to Projects" />
      </Container>
    </Container>
  );
}
