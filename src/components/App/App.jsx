import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./app.css";

function App(props) {
  return (
    <div className="app">
      {/*nav sec */}
      <Nav />
      {/* landing page*/}
      <Landing />
      {/* challenge sec*/}
      <ChallengeSection />
      {/* footer*/}

      <Footer />
    </div>
  );
}

export default App;
