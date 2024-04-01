import React from "react";
import { Card, Col } from "react-bootstrap";

export default function CardSoftSkill({ title, icon }) {
  return (
    <Col
      className="d-flex justify-content-center mb-5"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      <Card className="d-flex flex-column card-soft-skill text-center position-relative">
        <div className="position-absolute soft-skill-icon">
          {icon}
        </div>
        <Card.Text className="mt-5 pt-4">
          {title}
        </Card.Text>
      </Card>
    </Col>
  );
}
