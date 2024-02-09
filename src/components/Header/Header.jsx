import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg"

export default function Header() {
  return (
    <header style={{backgroundColor:"#c52dff"}}>
      <Navbar data-bs-theme="light" expand="lg" className="px-2" >
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
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
