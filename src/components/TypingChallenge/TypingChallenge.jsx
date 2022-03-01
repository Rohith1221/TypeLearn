import React from "react";
import "./TyC.css";
function TypingChallenge({
  selectedParagraph,
  timeStarted,
  timeremaining,
  testInfo,
}) {
  console.log("type challenge :", testInfo);

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
          <div className="textarea test-paragraph">{selectedParagraph}</div>
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
