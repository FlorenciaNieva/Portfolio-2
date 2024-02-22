import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header({ handleToggleMenu }) {
  return (
    <header>
      <Navbar data-bs-theme="dark" expand="sm" className="mx-4 mt-2">
        <img
          alt="logo"
          src={logo}
          width="80"
          height="50"
          className="d-inline-block align-top"
        />
        <Navbar.Toggle
          onClick={handleToggleMenu}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about-me" className="link">
              About me
            </Link>
            <Link to="/projects" className="link">
              Projects
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </Nav>
          <div className="d-flex justify-content-center ms-auto mt-2">
            <a href="https://github.com/FlorenciaNieva" target="_blank">
              <FaGithub size="25px" />
            </a>
            <a
              href="https://www.linkedin.com/in/florencia-nievaa/"
              target="_blank"
              className="mx-3"
            >
              <FaLinkedin size="25px" />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
