import React from "react";
import Container from "react-bootstrap/Container";
import FormContact from "../FormContact/FormContact";

export default function Contact() {
  return (
    <Container fluid className="container-contact">
      <Container className="d-flex flex-column">
        <h2 className="text-gradient mt-5 mb-5">CONTACT ME</h2>
        <FormContact />
      </Container>
    </Container>
  );
}
