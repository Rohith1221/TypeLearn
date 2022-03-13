import React from "react";
import "./Footer.css";
import { DiGithubAlt } from "react-icons/di";

function Footer(props) {
  return (
    <div className="footer-container">
      <a
        href="https://github.com/Rohith1221"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
        Made by Rohith <DiGithubAlt className="github"></DiGithubAlt>
      </a>
    </div>
  );
}

export default Footer;
