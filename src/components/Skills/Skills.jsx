import { Container, Col, Row } from "react-bootstrap";
import {
  FaHtml5,
  FaGitAlt,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNpm,
  FaNode,
  FaGithub,
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
  SiAxios,
} from "react-icons/si";
import { MdOutlinePhonelink } from "react-icons/md";
import SkillBadge from "../SkillBadge/SkillBadge";
import { useLanguage } from "../../context/LanguagesContext";

export default function Skills() {
  const { isEnglish } = useLanguage();

  return (
    <Container className="d-flex justify-content-center text-center mb-5">
      <Row className="d-flex flex-column">
        <Col>
          <h2 className="letter-color">
            {isEnglish ? "SKILLS" : "HABILIDADES"}
          </h2>
        </Col>
        <Col
          className="d-flex flex-column p-5"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div>Frontend Development:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <SkillBadge icon={<FaHtml5 />} text="HTML5" />
            <SkillBadge icon={<FaCss3Alt />} text="CSS3" />
            <SkillBadge icon={<SiJavascript />} text="JavaScript" />
            <SkillBadge icon={<FaReact />} text="ReactJS" />
            <SkillBadge icon={<SiVite />} text="Vite" />
            <SkillBadge icon={<FaNode />} text="NodeJS" />
            <SkillBadge icon={<MdOutlinePhonelink />} text="Responsive Desing" />
          </Col>
          <div>Frameworks y Libraries UI:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <SkillBadge icon={<FaBootstrap />} text="Bootstrap" />
            <SkillBadge icon={<SiBulma />} text="Bulma" />
            <SkillBadge icon={<SiChakraui />} text="Chakra UI" />
            <SkillBadge icon={<SiStyledcomponents />} text="Styled Components" />
          </Col>
          <div>Tools and Environment:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <SkillBadge icon={<SiVisualstudiocode />} text="VSCode" />
            <SkillBadge icon={<FaGitAlt />} text="GIT" />
            <SkillBadge icon={<FaGithub />} text="GitHub" />
            <SkillBadge icon={<FaNpm />} text="NPM" />
            <SkillBadge icon={<SiAxios />} text="Axios" />
          </Col>
          <div>Deployment and Hosting:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <SkillBadge icon={<SiNetlify />} text="Netlify" />
            <SkillBadge icon={<SiVercel />} text="Vercel" />
            <SkillBadge icon={<SiGithubpages /> } text="GitHub Pages" />
          </Col>
          <div>DataBase NoSQL:</div>
          <Col className="d-flex flex-wrap justify-content-center m-3">
            <SkillBadge icon={<SiFirebase />} text="FireStore" />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
