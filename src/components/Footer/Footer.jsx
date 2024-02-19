import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/logo/logo.svg";
import { Container, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-center pt-5 pb-3">
      <Container>
        <Image src={Logo} alt="logo" className="logo-footer mb-4" />
        <Nav className="d-flex justify-content-center align-items-center">
          <Nav.Link href="https://github.com/FlorenciaNieva">
            <FaGithub fontSize="45px" className="icon-social" />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/florencia-nievaa/">
            <FaLinkedin fontSize="45px" className="icon-social" />
          </Nav.Link>
          <Nav.Link href="mailto:florencianieva930@gmail.com">
            <MdOutlineMailOutline fontSize="45px" className="icon-social" />
          </Nav.Link>
        </Nav>
        <p className="mt-3">Made by Florencia Nieva</p>
      </Container>
    </footer>
  );
}
