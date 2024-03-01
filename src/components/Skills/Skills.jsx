import { Container, Col, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaGitAlt,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiChakraui,
  SiVisualstudiocode,
  SiVercel,
  SiBulma,
  SiVite,
  SiNetlify,
  SiFirebase,
  SiGithubpages,
  SiStyledcomponents,
} from "react-icons/si";
import { MdOutlinePhonelink } from "react-icons/md";

export default function Skills() {
  return (
    <Container className="d-flex justify-content-center text-center mb-5">
      <Row className="d-flex flex-column">
        <Col>
          <h2 className="letter-color">SKILLS</h2>
        </Col>
        <Col className="d-flex flex-column p-5">
          <div>Frontend Development:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <div className="skill-badge">
              <FaHtml5 /> HTML5
            </div>
            <div className="skill-badge">
              <FaCss3Alt /> CSS3
            </div>
            <div className="skill-badge">
              <SiJavascript /> JavaScript
            </div>
            <div className="skill-badge">
              <FaReact /> React
            </div>
            <div className="skill-badge">
              <SiVite /> Vite
            </div>
            <div className="skill-badge">
              <MdOutlinePhonelink /> Responsive Desing
            </div>
          </Col>
          <div>Frameworks y Libraries UI:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <div className="skill-badge">
              <FaBootstrap /> Bootstrap
            </div>
            <div className="skill-badge">
              <SiBulma /> Bulma
            </div>
            <div className="skill-badge">
              <SiChakraui /> Chakra UI
            </div>
            <div className="skill-badge">
              <SiStyledcomponents /> Styled Components
            </div>
          </Col>
          <div>Tools and Environment:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <div className="skill-badge">
              <SiVisualstudiocode /> VSCode
            </div>
            <div className="skill-badge">
              <FaGitAlt /> GIT
            </div>
            <div className="skill-badge">
              <FaNpm /> NPM
            </div>
          </Col>
          <div>Deployment and Hosting:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <div className="skill-badge">
              <SiNetlify /> Netlify
            </div>
            <div className="skill-badge">
              <SiVercel /> Vercel
            </div>
            <div className="skill-badge">
              <SiGithubpages /> Git Pages
            </div>
          </Col>
          <div>DataBase NoSQL:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <div className="skill-badge">
              <SiFirebase /> FireStore
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
