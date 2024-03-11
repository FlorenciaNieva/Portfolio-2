import { Nav, Navbar, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default function Header({ handleToggleMenu, menuOpen }) {
  return (
    <header className="w-100 position-absolute">
      <Container>
        <Navbar data-bs-theme="dark" expand="sm">
          <Image alt="logo" src={logo} width="80" />
          <Navbar.Toggle
            onClick={handleToggleMenu}
            aria-controls="basic-navbar-nav"
            className="header-toggle fs-6"
          >
            {menuOpen ? (
              <span>
                <IoCloseSharp />
              </span>
            ) : (
              <span>☰</span>
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-3">
              <Link to="/" className="link text-center">
                Home
              </Link>
              <Link to="/about-me" className="link text-center">
                About me
              </Link>
              <Link to="/projects" className="link text-center">
                Projects
              </Link>
              <Link to="/contact" className="link text-center">
                Contact
              </Link>
            </Nav>
            <div className="d-flex justify-content-center ms-auto mt-2 mx-3">
              <a
                href="https://github.com/FlorenciaNieva"
                target="_blank"
                className="mx-2"
              >
                <FaGithub
                  size="25px"
                  className="icon-header"
                  aria-label="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/florencia-nievaa/"
                target="_blank"
                className="mx-2"
              >
                <FaLinkedin
                  size="25px"
                  className="icon-header"
                  aria-label="Linkedin"
                />
              </a>
              <a
                href="mailto:florencianieva930@gmail.com"
                target="_blank"
                className="mx-2"
              >
                <MdOutlineMailOutline
                  size="25px"
                  className="icon-header"
                  aria-label="Email"
                />
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
