import { Nav, Navbar, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
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
            className="header-toggle"
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
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
