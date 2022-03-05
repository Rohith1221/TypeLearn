import React, { useState, useEffect } from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./app.css";

// function App(props) {
//   const totalTime = 60;
//   const url = "http://metaphorpsum.com/paragraphs/1/10";
//   const [selectedParagraph, setselectedParagraph] = useState("LOADING");
//   const [timeStarted, setTimeStarted] = useState(false);
//   const [timeremaining, setTimeRemaining] = useState(totalTime);
//   const [words, setWords] = useState(0);
//   const [characters, setCharacters] = useState(0);
//   const [wpm, setWpm] = useState(0);
//   const [testInfo, setTestInfo] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.text())
//       .then((data) => {
//         // console.log(data);
//         setselectedParagraph(data);
//       });

//     // const selectedParagraphArray = selectedParagraph.split("");
//     // console.log(selectedParagraphArray);
//     // const testInfo = selectedParagraphArray.map((selectedLetter) => {
//     //   return { testLetter: selectedLetter, status: "notAttempted" };
//     // });
//     // setTestInfo({ testInfo: testInfo });
//   }, []);

//   useEffect(() => {
//     const selectedParagraphArray = selectedParagraph.split("");
//     // console.log(selectedParagraphArray);
//     const testInfo = selectedParagraphArray.map((selectedLetter) => {
//       return { testLetter: selectedLetter, status: "notAttempted" };
//     });
//     setTestInfo({ testInfo: testInfo });
//   }, [selectedParagraph]);

//   // console.log(testInfo);

//   return (
//     <div className="app">
//       {/*nav sec */}
//       <Nav />
//       {/* landing page*/}
//       <Landing />
//       {/* challenge sec*/}
//       <ChallengeSection
//         selectedParagraph={selectedParagraph}
//         words={words}
//         characters={characters}
//         wpm={wpm}
//         timeremaining={timeremaining}
//         timeStarted={timeStarted}
//         testInfo={testInfo}
//       />
//       {/* footer*/}

//       <Footer />
//     </div>
//   );
// }

// export default App;

const url = "http://metaphorpsum.com/paragraphs/1/10";
const TotalTime = 60;
class App extends React.Component {
  state = {
    selectedParagraph: "Hello World!",
    testInfo: [],
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };
  componentDidMount() {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        this.setState({ selectedParagraph: data });
      });
    const selectedParagraphArray = this.state.selectedParagraph.split("");
    // console.log(selectedParagraphArray);
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });
    this.setState({ testInfo });
  }

  StartTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0)
        this.setState({ timeRemaining: this.state.timeRemaining - 1 });
      else {
        clearInterval(timer);
      }
    }, 1000);
  };
  HandleUserInput = (inputValue) => {
    console.log(inputValue);
    if (!this.state.timerStarted) this.StartTimer();
  };

  render() {
    console.log(this.state.testInfo);
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          testInfo={this.state.testInfo}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeremaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          onInputChange={this.HandleUserInput}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
