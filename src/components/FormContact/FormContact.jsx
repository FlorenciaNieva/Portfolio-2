import React from "react";
import { useForm } from "@formspree/react";
import { Form, FloatingLabel, Button } from "react-bootstrap";

export default function FormContact() {
  const [state, handleSubmit] = useForm("xdoqglvr");

  if (state.succeeded) {
    return <p>Thanks for communicating with me!</p>;
  }

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      <FloatingLabel
        data-bs-theme="dark"
        label="Name"
        className="floating-label mb-3"
      >
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          id="name"
          autocomplete="off"
        />
      </FloatingLabel>
      <FloatingLabel
        data-bs-theme="dark"
        label="Email"
        className="floating-label mb-3"
      >
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          id="email"
          autocomplete="off"
        />
      </FloatingLabel>
      <FloatingLabel
        data-bs-theme="dark"
        label="Message"
        className="floating-label"
      >
        <Form.Control
          as="textarea"
          type="textarea"
          name="message"
          placeholder="Message"
          style={{ height: "100px" }}
          className="form-control"
          id="message"
        />
      </FloatingLabel>
      <div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="button-animation m-3"
        >
          <span className="button-text">Send Message</span>
          <div className="fill-container"></div>
        </Button>
      </div>
    </form>
  );
}
