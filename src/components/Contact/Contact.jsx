import React from "react";
import Container from "react-bootstrap/Container";
import FormContact from "../FormContact/FormContact";
import { Row, Col } from "react-bootstrap";

export default function Contact({ menuOpen }) {
  return (
    <Container fluid className="container-contact">
      <Container className="d-flex flex-column pt-5">
        <Container className={`${menuOpen ? "menu-open" : "menu-close"}`}>
          <h2 className="text-center text-gradient mt-5 mb-3">CONTACT ME</h2>
          <Row className="justify-content-center">
            <Col lg="9">
              <FormContact />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
