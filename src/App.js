import React from "react";
import Quiz from "./component/Quiz";
import "./styles/app.scss";

import { QuizProvider } from "./contexts/QuizContext";
const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Country Quiz</h1>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
};

export default App;
