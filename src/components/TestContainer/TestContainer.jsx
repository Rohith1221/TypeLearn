import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TC.css";
function TestContainer({ words, characters, wpm }) {
  return (
    <div className="TC-container">
      <div data-aos="fade-up" className="typing-challenge-cont">
        <TypingChallenge words={words} characters={characters} wpm={wpm} />
      </div>
      {/*<div className="try-again-cont">
        <TryAgain words={words} characters={characters} wpm={wpm} />
      </div>
  */}
    </div>
  );
}

export default TestContainer;
