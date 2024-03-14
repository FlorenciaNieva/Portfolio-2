import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/logo/logo.svg";
import { Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useLanguage } from "../../context/LanguagesContext";

export default function Footer() {
  const { isEnglish } = useLanguage();

  return (
    <footer className="text-center pb-3">
      <Container>
        <Image src={Logo} alt="logo" className="logo-footer" />
        <Nav className="d-flex justify-content-center align-items-center mb-3">
          <Nav.Link href="https://github.com/FlorenciaNieva">
            <FaGithub fontSize="45px" className="icon-footer" aria-label="Git Hub" />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/florencia-nievaa/">
            <FaLinkedin fontSize="45px" className="icon-footer" aria-label="Linkedin" />
          </Nav.Link>
          <Nav.Link href="mailto:florencianieva930@gmail.com">
            <MdOutlineMailOutline fontSize="45px" className="icon-footer" aria-label="Email" />
          </Nav.Link>
        </Nav>
        <a href="https://github.com/FlorenciaNieva/Portfolio" target="_blank">
          {isEnglish ? ('Designed and  Built by Florencia Nieva') : ('Diseñado y construido por Florencia Nieva')}
        </a>
      </Container>
    </footer>
  );
}
