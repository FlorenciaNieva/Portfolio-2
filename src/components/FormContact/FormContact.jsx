import React from "react";
import { useForm } from "@formspree/react";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import { useLanguage } from "../../context/LanguagesContext";

export default function FormContact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const { isEnglish } = useLanguage();

  if (state.succeeded) {
    return (
      <p>
        {isEnglish
          ? "Thanks for communicating with me!"
          : "Gracias por comunicarte conmigo"}
      </p>
    );
  }

  return (
    <form className="d-flex flex-column p-5" onSubmit={handleSubmit}>
      <Row>
        <Col sm>
          <FloatingLabel
            data-bs-theme="dark"
            label={isEnglish ? ('Name *') : ('Nombre *')}
            className="floating-label mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              placeholder={isEnglish ? ('Name *') : ('Nombre *')}
              className="form-control"
              id="name"
              autoComplete="off"
              required
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            data-bs-theme="dark"
            label={isEnglish ? ('Last Name *') : ('Apellido *')}
            className="floating-label mb-3"
          >
            <Form.Control
              type="text"
              name="lastName"
              placeholder={isEnglish ? ('Last Name *') : ('Apellido *')}
              className="form-control"
              id="lastName"
              autoComplete="off"
              required
            />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        data-bs-theme="dark"
        label="Email *"
        className="floating-label mb-3"
      >
        <Form.Control
          type="email"
          name="email"
          placeholder="Email *"
          className="form-control"
          id="email"
          autoComplete="off"
          required
        />
      </FloatingLabel>
      <FloatingLabel
        data-bs-theme="dark"
        label={isEnglish ? ('Message *') : ('Mensaje *')}
        className="floating-label"
      >
        <Form.Control
          as="textarea"
          type="textarea"
          name="message"
          placeholder={isEnglish ? ('Message *') : ('Mensaje *')}
          style={{ height: "100px" }}
          className="form-control"
          id="message"
          required
        />
      </FloatingLabel>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          type="submit"
          disabled={state.submitting}
          className="button-form mt-3"
        >
          {isEnglish ? ('Send Message') : ('Enviar Mensaje')}
          {" "}
          <FiSend />
        </Button>
      </div>
    </form>
  );
}
