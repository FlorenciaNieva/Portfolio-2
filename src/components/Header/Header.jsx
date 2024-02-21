import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

export default function Header({ handleToggleMenu }) {
  return (
    <header className="mt-2 px-5">
      <Navbar data-bs-theme="dark" expand="sm" className="mx-5">
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
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
