import React from "react";
import { useForm } from "@formspree/react";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

export default function FormContact() {
  const [state, handleSubmit] = useForm("xdoqglvr");

  if (state.succeeded) {
    return <p>Thanks for communicating with me!</p>;
  }

  return (
    <form className="d-flex flex-column p-5" onSubmit={handleSubmit}>
      <Row>
        <Col sm>
          <FloatingLabel
            data-bs-theme="dark"
            label="Name *"
            className="floating-label mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              placeholder="Name *"
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
            label="Last Name *"
            className="floating-label mb-3"
          >
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name *"
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
        label="Message *"
        className="floating-label"
      >
        <Form.Control
          as="textarea"
          type="textarea"
          name="message"
          placeholder="Message *"
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
          Send Message
          <FiSend />
        </Button>
      </div>
    </form>
  );
}
