import React, { useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import image1 from "../../assets/images/carrers.png";
import image2 from "../../assets/images/generadorMemes.png";
import image3 from "../../assets/images/ahorrAdas.png";
import image4 from "../../assets/images/movieApp.png";
import image5 from "../../assets/images/portfolioAda.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function circularCarousel({ data }) {
  const [focusElement, setFocusElement] = useState(0);

  const images = [image1, image2, image3, image4, image5];
  const info = data;

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center mt-5">
            <div className="circular-carousel">
              <FancyCarousel
                images={images}
                setFocusElement={setFocusElement}
                carouselRadius={200}
                peripheralImageRadius={50}
                centralImageRadius={100}
                focusElementStyling={{ border: "2px solid #000" }}
                borderWidth={4}
                borderHexColor={"000000"}
                navigationButtonBgColor="000000"
              />
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <ProjectCard
              name={info[focusElement]?.name} 
              overview={info[focusElement]?.overview}
              tools={info[focusElement]?.tools}
              link={info[focusElement]?.link}
              repo={info[focusElement]?.repo}
              focusElement={focusElement}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
