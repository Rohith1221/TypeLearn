import React, { useState } from "react";
import "./TyC.css";
import TestLetter from "../TestLetter/TestLetter.jsx";
function TypingChallenge({
  selectedParagraph,
  timeStarted,
  timeremaining,
  testInfo,
}) {
  // console.log(testInfo);

  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="time">
          00:{timeremaining >= 10 ? timeremaining : `0${timeremaining}`}
        </p>
        <p className="time-info">
          {!timeStarted && "Start typing to start the test"}
        </p>
      </div>
      <div className="textarea-cont">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {testInfo.map((individualLetter, index) => {
              return (
                <TestLetter individualLetter={individualLetter} key={index} />
              );
            })}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            className="textarea"
            placeholder="start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TypingChallenge;
