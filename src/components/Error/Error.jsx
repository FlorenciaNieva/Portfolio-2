import React from "react";
import { Container } from "react-bootstrap";
import { MdErrorOutline } from "react-icons/md";
import { useLanguage } from "../../context/LanguagesContext";

export default function Error() {
  const { isEnglish } = useLanguage();

  return (
    <Container
      fluid
      className="background d-flex align-items-center min-vh-100 pt-5"
    >
      <Container className="pt-5 text-center">
      <MdErrorOutline fontSize="50px" />
        <h1>
          {isEnglish ? ('The page could not be found') : ('No se pudo encontrar la página.')}
        </h1>
      </Container>
    </Container>
  );
}
