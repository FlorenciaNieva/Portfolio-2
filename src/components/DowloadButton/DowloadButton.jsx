import React from "react";
import Button from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

export default function DowloadButton({ link, text }) {
  return (
    <Button
      as="a"
      className="button-simple mt-3"
      href={link}
      target="_blank"
    >
      {text} <FaDownload />
    </Button>
  );
}
