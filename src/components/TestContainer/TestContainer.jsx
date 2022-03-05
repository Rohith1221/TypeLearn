import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import TypingChallenge from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TC.css";
function TestContainer({
  words,
  characters,
  wpm,
  selectedParagraph,
  timeStarted,
  timeremaining,
  testInfo,
}) {
  // console.log("TC", timeremaining);

  return (
    <div className="TC-container">
      {timeremaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <TypingChallengeContainer
            words={words}
            characters={characters}
            wpm={wpm}
            timeStarted={timeStarted}
            timeremaining={timeremaining}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain words={words} characters={characters} wpm={wpm} />
        </div>
      )}
    </div>
  );
}

export default TestContainer;

// state --> object --> key value pair
