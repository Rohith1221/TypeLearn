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

const url = "http://metaphorpsum.com/paragraphs/1/11";
const TotalTime = 60;
const DefaultState = {
  selectedParagraph: "",
  testInfo: [],
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};
class App extends React.Component {
  state = DefaultState;
  fetchNewPara = () => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        // this.setState({ selectedParagraph: data });
        const selectedParagraphArray = data.split("");
        // console.log(selectedParagraphArray);
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });
        this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
      });
  };

  componentDidMount() {
    this.fetchNewPara();
  }

  StartTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // wpm
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => {
    // alert("startr again");
    // this.fetchNewPara();
    window.location.reload();
  };

  HandleUserInput = (inputValue) => {
    console.log(inputValue);
    if (!this.state.timerStarted) this.StartTimer();

    const characters = inputValue.length;
    console.log("chars", characters);
    const words = inputValue.split(" ").length;
    console.log("words:", words);
    const index = characters - 1;
    console.log(index);
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }
    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }
    //make a copy of test info
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    //check for correct type letters
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    console.log(
      "APP JSX",
      this.state.testInfo[this.state.selectedParagraph.length - 1]
    );
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
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
