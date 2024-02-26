import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormContact from "../FormContact/FormContact";
import ArrowButton from "../ArrowButton/ArrowButton";

export default function Contact({ menuOpen }) {
  return (
    <Container fluid className="container-contact pb-5">
      <Container className="d-flex flex-column pt-5 text-center">
        <Container className={`${menuOpen ? "menu-open" : "menu-close"}`}>
          <h2 className="letter-color mt-5 mb-3">CONTACT ME</h2>
          <p className="my-4">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
          <Row className="justify-content-center">
            <Col lg="9">
              <FormContact />
              <div className="mt-5">
                <ArrowButton route="/" content="Go Back Home" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
