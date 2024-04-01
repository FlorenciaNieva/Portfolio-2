import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firestore.config";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import MovieApp from "../../assets/images/movie-app.png";
import TodoList from "../../assets/images/todo-list.png";
import Carrers from "../../assets/images/carrers.png";
import MemeGenerator from "../../assets/images/generador-memes.png";
import Portfolio from "../../assets/images/portfolio.png";
import PortfolioAda from "../../assets/images/portfolio-ada.png";
import Ahorradas from "../../assets/images/ahorradas.png";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useLanguage } from "../../context/LanguagesContext";

const imageMap = {
  MovieApp,
  TodoList,
  Carrers,
  MemeGenerator,
  Portfolio,
  PortfolioAda,
  Ahorradas,
};

export default function Projects({ menuOpen }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isEnglish } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collec = collection(db, "projects");
        const docs = await getDocs(collec);
        const documents = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid className="container-projects">
      <Container className="d-flex flex-column align-items-center">
        <Row className={menuOpen ? "menu-open" : "menu-close"}>
          <Col>
            <h2 className="letter-color m-5 pt-5">
              {isEnglish ? "PROJECTS" : "PROYECTOS"}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-wrap justify-content-center">
            {loading ? (
              <div className="container-spinner">
                <Spinner animation="grow" />
              </div>
            ) : (
              data.map((info, index) => (
                <ProjectCard
                  name={info?.name}
                  repo={info?.repo}
                  link={info?.link}
                  image={imageMap[info?.name]}
                  overview={isEnglish ? info?.overview : info?.overviewEs}
                  tools={info?.tools}
                  key={info.id}
                />
              ))
            )}
          </Col>
        </Row>
        <Container className="mb-5">
          <ArrowButton
            route="/contact"
            content={isEnglish ? "Go to Contact" : "Ir a Contacto"}
          />
        </Container>
      </Container>
    </Container>
  );
}
