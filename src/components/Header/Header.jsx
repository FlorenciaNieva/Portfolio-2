import { Nav, Navbar, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { IoCloseSharp } from "react-icons/io5";
import { useLanguage } from "../../context/LanguagesContext";

export default function Header({ handleToggleMenu, menuOpen }) {
  const { isEnglish, toggleLanguage } = useLanguage();

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
                {isEnglish ? "Home" : "Inicio"}
              </Link>
              <Link to="/about-me" className="link text-center">
                {isEnglish ? "About me" : "Sobre mi"}
              </Link>
              <Link to="/projects" className="link text-center">
                {isEnglish ? "Projects" : "Proyectos"}
              </Link>
              <Link to="/contact" className="link text-center">
                {isEnglish ? "Contact" : "Contacto"}
              </Link>
            </Nav>
            <div className="d-flex justify-content-center ms-auto mt-2">
              <a onClick={toggleLanguage}>{isEnglish ? "EN" : "ES"}</a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
