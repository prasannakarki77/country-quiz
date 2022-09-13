import React from "react";
import "../styles/quiz.scss";
const Quiz = () => {
  return (
    <div className="quiz">
      <p className="quiz__question">Kuala Lumpur is the capital of</p>
      <ul className="quiz__options">
        <li className="quiz__option">
          <span className="quiz__option--number"> A</span> Vietnam
        </li>
        <li className="quiz__option">
          <span className="quiz__option--number">B</span> Malaysia
        </li>
        <li className="quiz__option">
          {" "}
          <span className="quiz__option--number">C</span> Sweden
        </li>
        <li className="quiz__option">
          {" "}
          <span className="quiz__option--number">D </span>Austria
        </li>
      </ul>
    </div>
  );
};

export default Quiz;
