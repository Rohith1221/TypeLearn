import Typewriter from "typewriter-effect";
import React from "react";
import "./landing.css";
import img from "../../assets/flash.png";
function Landing(props) {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header">can you write ....</h1>
        <div className="typewritter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div data-aos="fade-left" className="landing-right">
        <img src={img} className="flash-img"></img>
      </div>
    </div>
  );
}

export default Landing;
