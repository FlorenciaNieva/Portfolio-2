import { Container, Col, Row, Image, Button } from "react-bootstrap";
import ImageProfile from "../../assets/images/image-profile.png";
import { FaDownload } from "react-icons/fa";
import Skills from "../Skills/Skills";
import ArrowButton from "../ArrowButton/ArrowButton";
import SoftSkills from "../SoftSkills/SoftSkills";
import { useLanguage } from "../../context/LanguagesContext";

export default function AboutMe({ menuOpen }) {
  const { isEnglish } = useLanguage();

  return (
    <Container fluid className="background container-about pb-4">
      <Container className="pb-5">
        <Row className={menuOpen ? "menu-open" : "menu-close"}>
          <Col
            className="d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Image
              src={ImageProfile}
              alt="profile image"
              roundedCircle
              className="img-profile"
            />
            <div className="d-flex justify-content-center align-items-center mb-5">
              <Button
                as="a"
                className="button-simple mt-3"
                href={
                  isEnglish
                    ? "https://drive.google.com/file/d/1TJuMytShuELldvx0UA9GYA2CPZc_rsBd/view?usp=sharing"
                    : "https://drive.google.com/file/d/1x2ZjLMSgmQCrlQvQ9IvDrdwWZ0UjL0TT/view?usp=sharing"
                }
                target="_blank"
              >
                {isEnglish ? "Download CV" : "Descargar CV"} <FaDownload />
              </Button>
            </div>
          </Col>
          <Col
            className="about-me mb-5"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2 className="letter-color">
              {isEnglish ? "ABOUT ME" : "SOBRE MI"}
            </h2>
            <p>
              {isEnglish
                ? "Hello! my name is Florencia Nieva. I am a passionate Frontend Developer Junior residing in Buenos Aires, Argentina.I finished my Frontend Development degree at ADA ITW and I am constantly expanding my knowledge in this field. Currently, I am at an A2 level English and continue to refine my skills in it."
                : "¡Hola! Mi nombre es Florencia Nieva. soy una apasionada Desarrolladora Frontend Junior con residencia en Buenos Aires, Argentina. Finalice la Carrera de Desarrollo Frontend en ADA ITW y estoy ampliando constantemente mis conocimientos en este campo. Actualmente estoy en un nivel A2 en el idioma inglés y continuo perfeccionando mi habilidades en el idioma."}
            </p>
            <p>
              {isEnglish
                ? "I am actively seeking job opportunities that will allow me to deepen my skills and continue learning."
                : "Estoy buscando activamente oportunidades laborales que me permitan profundizar mis habilidades y seguir aprendiendo."}
            </p>
            <hr className="my-4" />
            <Row>
              <Col>
                <p>
                  <span className="letter-color">
                    {isEnglish ? "Name:" : "Nombre:"}
                  </span>{" "}
                  Florencia Nieva
                </p>
                <p>
                  <span className="letter-color">
                    {isEnglish ? "Age:" : "Edad:"}
                  </span>{" "}
                  18
                </p>
              </Col>
              <Col>
                <p>
                  <span className="letter-color">
                    {isEnglish ? "Nationality:" : "Nacionalidad:"}
                  </span>{" "}
                  {isEnglish ? "Argentinian" : "Argentina"}
                </p>
                <p>
                  <span className="letter-color">
                    {isEnglish ? "English Level:" : "Nivel de ingles"}
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
      <Container className="mb-4">
        <ArrowButton
          route="/projects"
          content={isEnglish ? "Go to Projects" : "Ir a Proyectos"}
        />
      </Container>
    </Container>
  );
}
