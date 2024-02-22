import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firestore.config";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import ArrowButton from "../ArrowButton/ArrowButton";

export default function Projects({ menuOpen }) {
  const [data, setData] = useState([]);

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
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid className="container-projects d-flex flex-column">
      <Row className={menuOpen ? "menu-open" : "menu-close"}>
        <Col>
          <h2 className="text-gradient m-5 pt-5">PROJECTS</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap justify-content-center">
          {data.map((info) => (
            <ProjectCard
              name={info?.name}
              repo={info?.repo}
              link={info?.link}
              overview={info?.overview}
              tools={info?.tools}
              key={info.id}
            />
          ))}
        </Col>
      </Row>
      <Container>
        <ArrowButton route="/contact" content="Go to Contact" />
      </Container>
    </Container>
    
  );
}
