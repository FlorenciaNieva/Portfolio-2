import { Container, Col, Row } from "react-bootstrap";
import { useLanguage } from "../../context/LanguagesContext";
import CardSoftSkill from "../CardSoftSkill/CardSoftSkill";

export default function SoftSkills() {
  const { isEnglish } = useLanguage();

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h2 className="letter-color mb-5">
            {isEnglish ? 'SOFT SKILLS' : 'HABILIDADES BLANDAS'}
          </h2>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <CardSoftSkill titleEn="Teamwork" titleEs="Trabajo en Equipo" />
        <CardSoftSkill titleEn="Time Management" titleEs="Gestión de Tiempo" />
        <CardSoftSkill titleEn="Love Of Learning" titleEs="Aprendizaje Continuo" />
        <CardSoftSkill titleEn="Active Listening" titleEs="Escucha Activa" />
      </Row>
    </Container>
  );
}
