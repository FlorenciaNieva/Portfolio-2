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
        <p className="fs-6">{overview}</p>
      </Card.Body>
      <Row>
        <Col className="mx-3">
          <p className="fs-5">
            {tools.map((tool) => (
              <>
                {tool === "HTML5" ? (
                  <FaHtml5 className="m-1" />
                ) : tool === "CSS3" ? (
                  <FaCss3Alt className="m-1" />
                ) : tool === "GIT" ? (
                  <FaGitAlt className="m-1" />
                ) : tool === "GitHub Pages" ? (
                  <SiGithubpages className="m-1" />
                ) : tool === "Visual Studio Code" ? (
                  <SiVisualstudiocode className="m-1" />
                ) : tool === "JavaScript" ? (
                  <SiJavascript className="m-1" />
                ) : tool === "Chakra UI" ? (
                  <SiChakraui className="m-1" />
                ) : tool === "Bulma" ? (
                  <SiBulma className="m-1" />
                ) : tool === "Vercel" ? (
                  <SiVercel className="m-1" />
                ) : tool === "NPM" ? (
                  <FaNpm className="m-1" />
                ) : tool === "React" ? (
                  <FaReact className="m-1" />
                ) : tool === "Vite" ? (
                  <SiVite className="m-1" />
                ) : tool === "The Movie DB" ? (
                  <SiThemoviedatabase className="m-1" />
                ) : (
                  <Badge bg="secondary" className="m-1">
                    {tool}
                  </Badge>
                )}
              </>
            ))}
          </p>
        </Col>
      </Row>
    </Card>
  );
}
