import React from "react";
import Container from "react-bootstrap/Container";
import FormContact from "../FormContact/FormContact";
import { Row, Col } from "react-bootstrap";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

export default function Contact({ menuOpen }) {
  return (
    <Container fluid className="container-contact pb-5">
      <Container className="d-flex flex-column pt-5">
        <Container className={`${menuOpen ? "menu-open" : "menu-close"}`}>
          <h2 className="text-center text-gradient mt-5 mb-3">CONTACT ME</h2>
          <p className="text-center my-5">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
          <Row className="justify-content-center">
            <Col lg="9">
              <FormContact />
              <div className="mt-5">
                <AnimatedButton route="/" content="Go Back Home" />
              </div>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
