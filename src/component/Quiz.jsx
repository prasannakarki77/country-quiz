import React, { useContext } from "react";
import QuizContext from "../contexts/QuizContext";

import logo from "../assets/country-quiz-logo.svg";
import "../styles/quiz.scss";
import { useState } from "react";
const Quiz = () => {
  const {
    questions,
    selectedOptionIndex,
    answered,
    correct,
    questionNo,
    dispatch,
  } = useContext(QuizContext);
  const { question, options, answer, flag } = questions[questionNo];
  const [finished, setFinished] = useState(true);

  const selectOption = (index) => {
    dispatch({ type: "SELECT_OPTION", payload: index });
    console.log(selectedOptionIndex);
    if (options[index] === answer) {
      dispatch({ type: "CORRECT", payload: correct + 1 });
    }
  };
  const nextQuestion = () => {
    if (questionNo >= questions.length - 1) {
      setFinished(true);
      return;
    }
    dispatch({ type: "NEXT", payload: questionNo + 1 });
    console.log(questionNo);
  };
  const tryAgain = () => {
    setFinished(false);
    dispatch({ type: "TRY_AGAIN" });
  };
  return (
    <>
      {finished ? (
        <div className="quiz">
          <div className="finished-logo">
            <img src={logo} alt="logo" />
          </div>

          <h1 className="finished__heading">Results</h1>
          <p className="finished__results">
            You got{" "}
            <span className="finished__results--correct">{correct}</span>{" "}
            correct answers
          </p>
          <div className="try-again">
            <button className="try-again-btn" onClick={tryAgain}>
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img src={logo} alt="logo" className="logo" />
          <div className="quiz">
            {flag && <img src={flag} alt="flag" width={200} />}
            <p className="quiz__questison">{question}</p>
            <ul className={`quiz__options ${answered && "no-pointer"}`}>
              <li
                className={`quiz__option ${
                  selectedOptionIndex === 0 &&
                  (options[0] === answer ? "correct" : "wrong")
                } ${answered && options[0] === answer && "correct"} `}
                onClick={() => selectOption(0)}
              >
                <span className="quiz__option--number"> A</span> {options[0]}
              </li>
              <li
                className={`quiz__option ${
                  selectedOptionIndex === 1 &&
                  (options[1] === answer ? "correct" : "wrong")
                } ${answered && options[1] === answer && "correct"} `}
                onClick={() => selectOption(1)}
              >
                <span className="quiz__option--number">B</span> {options[1]}
              </li>
              <li
                className={`quiz__option ${
                  selectedOptionIndex === 2 &&
                  (options[2] === answer ? "correct" : "wrong")
                } ${answered && options[2] === answer && "correct"} `}
                onClick={() => selectOption(2)}
              >
                {" "}
                <span className="quiz__option--number">C</span> {options[2]}
              </li>
              <li
                className={`quiz__option ${
                  selectedOptionIndex === 3 &&
                  (options[3] === answer ? "correct" : "wrong")
                } ${answered && options[3] === answer && "correct"} `}
                onClick={() => selectOption(3)}
              >
                {" "}
                <span className="quiz__option--number">D </span> {options[3]}
              </li>
            </ul>

            {answered && (
              <button className="quiz__btn" onClick={nextQuestion}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
