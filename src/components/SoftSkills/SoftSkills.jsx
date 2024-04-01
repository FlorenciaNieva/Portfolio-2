import { Container, Col, Row } from "react-bootstrap";
import { useLanguage } from "../../context/LanguagesContext";
import CardSoftSkill from "../CardSoftSkill/CardSoftSkill";
import { FaAssistiveListeningSystems, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";

export default function SoftSkills() {
  const { isEnglish } = useLanguage();

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h2 className="letter-color mb-5">
            {isEnglish ? "SOFT SKILLS" : "HABILIDADES BLANDAS"}
          </h2>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <CardSoftSkill
          title={isEnglish ? "Teamwork" : "Trabajo en Equipo"}
          icon={<RiTeamFill fontSize="5rem" />}
        />
        <CardSoftSkill
          title={isEnglish ? "Time Management" : "Gestión de Tiempo"}
          icon={<FaBusinessTime fontSize="5rem" />}
        />
        <CardSoftSkill
          title={isEnglish ? "Love Of Learning" : "Aprendizaje Continuo"}
          icon={<IoBook fontSize="5rem" />}
        />
        <CardSoftSkill
          title={isEnglish ? "Active Listening" : "Escucha Activa"}
          icon={<FaAssistiveListeningSystems fontSize="5rem" />}
        />
      </Row>
    </Container>
  );
}
