import { Card, Badge, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaGitAlt,
  FaCss3Alt,
  FaReact,
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

export default function ProjectCard({ name, repo, link, overview, tools }) {
  return (
    <Card className="project-card">
      <Card.Body>
        <Row>
          <Col>
            <h3>{name}</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <a href={repo} target="_blank" className="m-1">
              <FaGithub fontSize="25px" />
            </a>
            <a href={link} target="_blank" className="m-1">
              <FaExternalLinkAlt fontSize="25px" />
            </a>
          </Col>
        </Row>
        <p className="project-card-text">{overview}</p>
        <p className="d-flex justify-content-center align-items-center">
          {tools.map((tool) => (
            <>
              {tool === "HTML5" ? (
                <FaHtml5 className="m-1" fontSize="25px" />
              ) : tool === "CSS3" ? (
                <FaCss3Alt className="m-1" fontSize="25px" />
              ) : tool === "GIT" ? (
                <FaGitAlt className="m-1" fontSize="25px" />
              ) : tool === "GitHub Pages" ? (
                <SiGithubpages className="m-1" fontSize="50px" />
              ) : tool === "Visual Studio Code" ? (
                <SiVisualstudiocode className="m-1" fontSize="25px" />
              ) : tool === "JavaScript" ? (
                <SiJavascript className="m-1" fontSize="25px" />
              ) : tool === "Chakra UI" ? (
                <SiChakraui className="m-1" fontSize="25px" />
              ) : tool === "Bulma" ? (
                <SiBulma className="m-1" fontSize="25px" />
              ) : tool === "Vercel" ? (
                <SiVercel className="m-1" fontSize="25px" />
              ) : tool === "NPM" ? (
                <FaNpm className="m-1" fontSize="25px" />
              ) : tool === "React" ? (
                <FaReact className="m-1" fontSize="25px" />
              ) : tool === "Vite" ? (
                <SiVite className="m-1" fontSize="25px" />
              ) : tool === "The Movie DB" ? (
                <SiThemoviedatabase className="m-1" fontSize="25px" />
              ) : (
                <Badge bg="secondary" className="m-1">
                  {tool}
                </Badge>
              )}
            </>
          ))}
        </p>
      </Card.Body>
    </Card>
  );
}
