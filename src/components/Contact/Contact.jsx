import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormContact from "../FormContact/FormContact";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useLanguage } from "../../context/LanguagesContext";

export default function Contact({ menuOpen }) {
  const { isEnglish } = useLanguage();

  return (
    <Container fluid className="container-contact pb-5">
      <Container className="d-flex flex-column pt-5 text-center">
        <Container className={`${menuOpen ? "menu-open" : "menu-close"}`}>
          <h2 className="letter-color my-5">
            {isEnglish ? "CONTACT ME" : "CONTACTAME"}
          </h2>
          <p>
            {isEnglish
              ? "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible."
              : "No dudes en ponerte en contacto conmigo enviando el siguiente formulario y me comunicaré con usted lo antes posible."}
          </p>
          <Row className="justify-content-center">
            <Col lg="9">
              <FormContact />
              <div className="my-5" data-aos="fade-up" data-aos-duration="2200">
                <ArrowButton
                  route="/"
                  content={isEnglish ? "Go Back Home" : "Volver a Inicio"}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
