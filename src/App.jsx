import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";
import { LanguagesContextProvider } from "./context/LanguagesContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <BrowserRouter>
        <LanguagesContextProvider>
          <Header handleToggleMenu={handleToggleMenu} menuOpen={menuOpen} />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home menuOpen={menuOpen} />} />
            <Route path="/about-me" element={<AboutMe menuOpen={menuOpen} />} />
            <Route
              path="/projects"
              element={<Projects menuOpen={menuOpen} />}
            />
            <Route path="/contact" element={<Contact menuOpen={menuOpen} />} />
          </Routes>
          <Footer />
        </LanguagesContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
