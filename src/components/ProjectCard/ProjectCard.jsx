import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

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
        <p className="fs-6 m-0">{overview}</p>
      </Card.Body>
      <Row>
        <Col className="m-2">
          {tools.map((tool, index) => (
            <React.Fragment key={index}>
              <div className="tools-badge">{tool}</div>
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </Card>
  );
}
