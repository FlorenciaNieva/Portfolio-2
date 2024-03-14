import React from "react";
import { Card, Col } from "react-bootstrap";
import { FaAssistiveListeningSystems, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoBook } from "react-icons/io5";
import { useLanguage } from "../../context/LanguagesContext";

export default function CardSoftSkill({ titleEn, titleEs }) {
  const { isEnglish } = useLanguage();

  return (
    <Col className="d-flex justify-content-center mb-5">
      <Card className="d-flex flex-column card-soft-skill text-center position-relative">
        <div className="position-absolute soft-skill-icon">
          {titleEn === "Teamwork" ? (
            <RiTeamFill fontSize="5rem" />
          ) : titleEn === "Time Management" ? (
            <FaBusinessTime fontSize="5rem" />
          ) : titleEn === "Love Of Learning" ? (
            <IoBook fontSize="5rem" />
          ) : titleEn === "Active Listening" ? (
            <FaAssistiveListeningSystems fontSize="5rem" />
          ) : null}
        </div>
        <Card.Text className="mt-5 pt-4">
          {isEnglish ? titleEn : titleEs}
        </Card.Text>
      </Card>
    </Col>
  );
}
