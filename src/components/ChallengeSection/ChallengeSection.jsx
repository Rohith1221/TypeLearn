import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./CS.css";
function ChallengeSection(props) {
  return (
    <div className="ChallengeSection-container">
      <h1 data-aos="fade-down" className="ChallengeSection-header">
        Take a test now !!s
      </h1>
      <TestContainer words={4} characters={20} wpm={20} />
    </div>
  );
}

export default ChallengeSection;
