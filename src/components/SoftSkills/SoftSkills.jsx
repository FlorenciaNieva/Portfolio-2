import { Container, Col, Card, Row } from "react-bootstrap";
import { FaAssistiveListeningSystems, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";
import { useLanguage } from "../../context/LanguagesContext";

export default function SoftSkills() {
  const { isEnglish } = useLanguage();

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h2 className="letter-color mb-5">
            {isEnglish ? ('SOFT SKILLS') : ('HABILIDADES BLANDAS')}
          </h2>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col className="d-flex justify-content-center mb-5">
          <Card className="d-flex flex-column card-soft-skill text-center position-relative">
            <div className="position-absolute soft-skill-icon">
              <RiTeamFill fontSize="5rem" />
            </div>
            <Card.Text className="mt-5 pt-4">
              {isEnglish ? ('Teamwork') : ('Trabajo en Equipo')}
            </Card.Text>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <Card className="d-flex flex-column card-soft-skill text-center position-relative">
            <div className="position-absolute soft-skill-icon">
              <FaBusinessTime fontSize="5rem" />
            </div>
            <Card.Text className="mt-5 pt-4">
              {isEnglish ? ('Time Management') : ('Gestión de Tiempo')}
            </Card.Text>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <Card className="d-flex flex-column card-soft-skill text-center position-relative">
            <div className="position-absolute soft-skill-icon">
              <IoBook fontSize="5rem" />
            </div>
            <Card.Text className="mt-5 pt-4">
              {isEnglish ? ('Love Of Learning') : ('Aprendizaje Continuo')}
            </Card.Text>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center mb-5">
          <Card className="d-flex flex-column card-soft-skill text-center position-relative">
            <div className="position-absolute soft-skill-icon">
              <FaAssistiveListeningSystems fontSize="5rem" />
            </div>
            <Card.Text className="mt-5 pt-4">
              {isEnglish ? ('Active Listening') : ('Escucha Activa')}
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
