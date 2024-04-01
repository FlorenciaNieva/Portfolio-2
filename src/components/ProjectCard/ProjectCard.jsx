import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ name, repo, link, image, overview, tools }) {
  return (
    <Card className="project-card" style={{ width: "22rem" }}>
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
        <Image
          src={image}
          fluid
          className="mt-1"
        />
        <p className="fs-6 m-0 mt-2">{overview}</p>
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
