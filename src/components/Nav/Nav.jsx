import React from "react";
import logo from "../../assets/logo.png";
import "./nav.css";
function Nav(props) {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} className="flash-logo" alt="img"></img>
        <p className="flash-logo-text">FlashType</p>
      </div>
      <div className="nav-right">
        <a href="#" target="_blank" className="nav-link" rel="noerferrer">
          AAM
        </a>
      </div>
    </div>
  );
}

export default Nav;
