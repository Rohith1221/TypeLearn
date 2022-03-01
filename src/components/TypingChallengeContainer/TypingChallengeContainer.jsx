import React from "react";
import ChallengeDetailCard from "../ChallengeDetailsCard/ChallengeDetailCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TyChallengeC.css";
function TypingChallengeContainer({
  words,
  characters,
  wpm,
  selectedParagraph,
  timeStarted,
  timeremaining,
  testInfo,
}) {
  return (
    <div className="typing-challenge-cont">
      {/* details*/}
      <div className="details-cont">
        <ChallengeDetailCard cardName="Words" cardValue={words} />
        <ChallengeDetailCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailCard cardName="WPM" cardValue={wpm} />
      </div>
      <div className="typewritter-cont">
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeStarted={timeStarted}
          timeremaining={timeremaining}
          testInfo={testInfo}
        />
      </div>
      {/* the real challenge */}
    </div>
  );
}

export default TypingChallengeContainer;
