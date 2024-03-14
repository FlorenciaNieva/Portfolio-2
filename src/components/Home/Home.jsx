import { Container, Row, Col } from "react-bootstrap";
import ArrowButton from "../ArrowButton/ArrowButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useLanguage } from "../../context/LanguagesContext";

export default function Home() {
  const { isEnglish } = useLanguage();

  return (
    <>
      <Container
        fluid
        className="background d-flex align-items-center min-vh-100 pt-5"
      >
        <Container className="pt-5">
          <Row>
            <Col>
              <h3 className="fs-5">
                {isEnglish ? "Hi! My name is" : "¡Hola! Mi nombre es"}
              </h3>
              <Col className="d-flex text-animation">
                <h1>Florencia Nieva</h1>
              </Col>
              <h3 className="fs-1">Frontend Developer</h3>
              <div className="mt-3 mb-3">
                <a
                  href="https://github.com/FlorenciaNieva"
                  target="_blank"
                  className="mx-2"
                >
                  <FaGithub
                    size="25px"
                    className="icon-home"
                    aria-label="GitHub"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/florencia-nievaa/"
                  target="_blank"
                  className="mx-2"
                >
                  <FaLinkedin
                    size="25px"
                    className="icon-home"
                    aria-label="Linkedin"
                  />
                </a>
                <a
                  href="mailto:florencianieva930@gmail.com"
                  target="_blank"
                  className="mx-2"
                >
                  <MdOutlineMailOutline
                    size="25px"
                    className="icon-home"
                    aria-label="Email"
                  />
                </a>
              </div>
              <Col>
                <ArrowButton
                  route="/about-me"
                  content={isEnglish ? "See More About Me" : "Ver Más Sobre Mi"}
                />
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
