import React from "react";
import "./TA.css";
function TryAgain({ words, characters, wpm }) {
  return (
    <div className="try-again-cont">
      <h1>Test results</h1>
      <div className="results-container">
        <p>
          <b>characters :</b> {characters}
        </p>
        <p>
          <b>words :</b> {words}
        </p>
        <p>
          <b>wpm :</b> {wpm}
        </p>
      </div>
      <div className="">
        <button className="end-buttons start-again-btn">Re-Try</button>
        <button
          className="end-buttons share-btn"
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=rohith.com/rohith",
              "facebook-share-dialog",
              "width=800,height=600"
            );
          }}
        >
          Share
        </button>
        <button
          className="end-buttons tweet-btn"
          onClick={() => {
            window.open(
              "https://www.twitter.com/intent/tweet?text=rohith.com",
              "twitter",
              "width=800,height=600"
            );
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TryAgain;
