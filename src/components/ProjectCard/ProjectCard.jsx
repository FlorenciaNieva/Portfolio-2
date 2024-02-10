import { Card, Badge, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
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
  SiGithubpages,
  SiVercel,
  SiBulma,
  SiThemoviedatabase,
  SiVite,
} from "react-icons/si";
import image1 from "../../assets/images/carrersCard.png";
import image2 from "../../assets/images/memesCard.png";
import image3 from "../../assets/images/ahorradasCard.png";
import image4 from "../../assets/images/movieappCard.png";
import image5 from "../../assets/images/portfolioCard.png";

export default function ProjectCard({
  name,
  overview,
  tools,
  repo,
  link,
  focusElement,
}) {
  const images = [image1, image2, image3, image4, image5];

  return (
    <Card className="project-card">
      <img
        className="project-card-img"
        src={images[focusElement]}
        alt="image project"
      />
      <Card.Body>
        <Row>
          <Col>
            <h3>{name}</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <a href={repo} target="_blank" className="m-1">
              <FaGithub color="black" fontSize="25px" />
            </a>
            <a href={link} target="_blank" className="m-1">
              <FaExternalLinkAlt color="black" fontSize="25px" />
            </a>
          </Col>
        </Row>
        <p className="project-card-text">{overview}</p>
        <p className="d-flex justify-content-center align-items-center">
          {tools?.map((tool) => (
            <>
              {tool === "HTML5" ? (
                <FaHtml5 className="m-1" fontSize="25px" color="#e5532d" />
              ) : tool === "GIT" ? (
                <FaGitAlt className="m-1" fontSize="25px" color="#f05639" />
              ) : tool === "GitHub Pages" ? (
                <SiGithubpages className="m-1" fontSize="50px" />
              ) : tool === "Visual Studio Code" ? (
                <SiVisualstudiocode className="m-1" fontSize="25px" color="#087bbb"
                />
              ) : tool === "JavaScript" ? (
                <SiJavascript className="m-1" fontSize="25px" color="#f7e025" />
              ) : tool === "Chakra UI" ? (
                <SiChakraui className="m-1" fontSize="25px" color="#34c1b6" />
              ) : tool === "Bulma" ? (
                <SiBulma className="m-1" fontSize="25px" color="#0bd2b4" />
              ) : tool === "Vercel" ? (
                <SiVercel className="m-1" fontSize="25px" />
              ) : tool === "NPM" ? (
                <FaNpm className="m-1" fontSize="25px" color="#cd3e3d" />
              ) : tool === "Bootstrap" ? (
                <FaBootstrap className="m-1" fontSize="25px" color="#8019fa" />
              ) : tool === "React" ? (
                <FaReact className="m-1" fontSize="25px" color="#82e2ff" />
              ) : tool === "CSS3" ? (
                <FaCss3Alt className="m-1" fontSize="25px" color="#2d53e5" />
              ) : tool === "The Movie DB" ? (
                <SiThemoviedatabase className="m-1" fontSize="25px" />
              ) : tool === "Vite" ? (
                <SiVite className="m-1" fontSize="25px" color="#2061df" />
              ) : (
                <Badge bg="secondary" className="m-1">{tool}</Badge>
              )}
            </>
          ))}
        </p>
      </Card.Body>
    </Card>
  );
}
