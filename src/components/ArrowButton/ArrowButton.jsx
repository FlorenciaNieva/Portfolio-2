import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export default function AnimatedButton({ route, content }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button className="button-animation mt-2" onClick={() => handleClick()}>
      <span className="button-text">
        {content}
        <GoArrowRight className="arrow-animation ml-2" fontSize="25px" />{" "}
      </span>
      <div className="fill-container"></div>
    </Button>
  );
}
