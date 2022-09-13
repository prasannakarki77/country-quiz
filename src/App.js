import React from "react";
import Quiz from "./component/Quiz";
import "./styles/app.scss";
import logo from "./assets/country-quiz-logo.svg";
const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Country Quiz</h1>
      <img src={logo} alt="logo" className="logo" />
      <Quiz />
    </div>
  );
};

export default App;
