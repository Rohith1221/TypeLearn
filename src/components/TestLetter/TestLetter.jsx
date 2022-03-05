import React from "react";
import "./TL.css";

function TestLetter({ individualLetter }) {
  const { status } = individualLetter;
  // let statusClass;

  const statusClass = {
    coreect: "test-letter-correct",
    incorrect: "test-letter-incorrect",
    notAttempted: "test-letter-not-attempted",
  }[status];

  // if (status === "correct") {
  //   statusClass = "test-letter-correct";
  // } else if (status === "incorrect") {
  //   statusClass = "test-letter-incorrect";
  // } else {
  //   statusClass = "test-letter-not-attempted";
  // }

  return (
    <span className={`test-letter ${statusClass}`}>
      {individualLetter.testLetter}
    </span>
  );
}

export default TestLetter;