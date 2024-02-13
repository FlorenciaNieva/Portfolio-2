import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  SiThemoviedatabase,
  SiVite,
  SiNetlify,
  SiFirebase,
} from "react-icons/si";
import { MdOutlinePhonelink } from "react-icons/md";

export default function Skills() {
  return (
    <Container className="text-center mb-5">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h2 className="text-gradient">SKILLS</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Col>
            <FaHtml5 className="m-3" size="50px" fill="#e5532d" />
            <p>HTML5</p>
          </Col>
          <Col>
            <FaCss3Alt className="m-3" size="50px" fill="#2d53e5" />
            <p>CSS3</p>
          </Col>
          <Col>
            <SiJavascript className="m-3" size="50px" fill="#f7e025" />
            <p>JavaScript</p>
          </Col>
          <Col>
            <FaReact className="m-3" size="50px" fill="#82e2ff" />
            <p>React.JS</p>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Col>
            <SiVite className="m-3" size="50px" fill="#2061df" />
            <p>Vite</p>
          </Col>
          <Col>
            <FaGitAlt className="m-3" size="50px" fill="#f05639" />
            <p>GIT</p>
          </Col>
          <Col>
            <SiVisualstudiocode className="m-3" size="50px" fill="#087bbb" />
            <p>Visual Studio Code</p>
          </Col>
          <Col>
            <MdOutlinePhonelink className="m-3" size="50px" />
            <p>Responsive Desing</p>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Col>
            <FaBootstrap className="m-3" size="50px" fill="#8019fa" />
            <p>Bootstrap</p>
          </Col>
          <Col>
            <SiBulma className="m-3" size="50px" fill="#0bd2b4" />
            <p>Bulma</p>
          </Col>
          <Col>
            <SiChakraui className="m-3" size="50px" fill="#34c1b6" />
            <p>Chakra UI</p>
          </Col>
          <Col>
            <SiNetlify className="m-3" size="50px" fill="#32e6e2" />
            <p>Netlify</p>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Col>
            <SiVercel className="m-3" size="50px" />
            <p>Vercel</p>
          </Col>
          <Col>
            <FaNpm className="m-3" size="50px" fill="#cd3e3d" />
            <p>NPM</p>
          </Col>
          <Col>
            <SiThemoviedatabase className="m-3" size="50px" />
            <p>The Movie Data Base</p>
          </Col>
          <Col>
            <SiFirebase className="m-3" size="50px" fill="#ffca29" />
            <p>FireStore</p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
