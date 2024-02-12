import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg"

export default function Header() {
  return (
    <header>
      <Navbar data-bs-theme="dark" expand="sm" className="px-2" >
          <img
            alt="logo"
            src={logo}
            width="80"
            height="50"
            className="d-inline-block align-top"
          />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" className="link">
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
