import React from "react";
import Container from "react-bootstrap/Container";
import FormContact from "../FormContact/FormContact";

export default function Contact({ menuOpen }) {
  return (
    <Container fluid className="container-contact">
      <Container className="d-flex flex-column pt-5">
        <Container className={menuOpen ? "menu-open" : "menu-close"}>
          <h2 className="text-gradient mt-5 mb-3">CONTACT ME</h2>
          <FormContact />
        </Container>
      </Container>
    </Container>
  );
}
