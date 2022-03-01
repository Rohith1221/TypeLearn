import React, { useState, useEffect } from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import { v4 as uuidv4 } from "uuid";
import "./app.css";

function App(props) {
  const totalTime = 60;
  const url = "http://metaphorpsum.com/paragraphs/1/10";
  const [selectedParagraph, setselectedParagraph] = useState("LOADING");
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeremaining, setTimeRemaining] = useState(totalTime);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [testInfo, setTestInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        setselectedParagraph(data);
      });
    // const selectedParagraphArray = selectedParagraph.split("");
    // console.log(selectedParagraphArray);
    // const testInfo = selectedParagraphArray.map((selectedLetter) => {
    //   return { testLetter: selectedLetter, status: "notAttempted" };
    // });
    // setTestInfo({ testInfo: testInfo });
  }, []);

  useEffect(() => {
    const selectedParagraphArray = selectedParagraph.split("");
    // console.log(selectedParagraphArray);
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return { testLetter: selectedLetter, status: "notAttempted" };
    });
    setTestInfo({ testInfo: testInfo });
  }, [selectedParagraph]);

  // console.log(testInfo);

  return (
    <div className="app">
      {/*nav sec */}
      <Nav />
      {/* landing page*/}
      <Landing />
      {/* challenge sec*/}
      <ChallengeSection
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        timeremaining={timeremaining}
        timeStarted={timeStarted}
        testInfo={testInfo}
      />
      {/* footer*/}

      <Footer />
    </div>
  );
}

export default App;
