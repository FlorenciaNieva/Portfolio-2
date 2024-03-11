import React from "react";
import { Container } from "react-bootstrap";
import { MdErrorOutline } from "react-icons/md";

export default function Error() {
  return (
    <Container
      fluid
      className="background d-flex align-items-center min-vh-100 pt-5"
    >
      <Container className="pt-5 text-center">
      <MdErrorOutline fontSize="50px" />
        <h1>The page could not be found</h1>
      </Container>
    </Container>
  );
}
