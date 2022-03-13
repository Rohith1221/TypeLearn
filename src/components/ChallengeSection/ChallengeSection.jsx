import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./CS.css";
function ChallengeSection({
  characters,
  words,
  wpm,
  selectedParagraph,
  timeremaining,
  timeStarted,
  testInfo,
  onInputChange,
  startAgain,
}) {
  // console.log(props.selectedParagraph);
  return (
    <div className="ChallengeSection-container">
      <h1 data-aos="fade-down" className="ChallengeSection-header">
        Take a test now !!s
      </h1>
      <TestContainer
        words={words}
        characters={characters}
        wpm={wpm}
        selectedParagraph={selectedParagraph}
        timeStarted={timeStarted}
        timeremaining={timeremaining}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
}

export default ChallengeSection;
