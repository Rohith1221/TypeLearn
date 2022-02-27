import React from "react";
import "./CDC.css";
function ChallengeDetailCard({ cardName, cardValue }) {
  return (
    <div className="details-card-cont">
      <div className="card-name">{cardName}</div>
      <div className="card-value">{cardValue}</div>
    </div>
  );
}

export default ChallengeDetailCard;
