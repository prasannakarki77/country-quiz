import { createContext, useReducer } from "react";
import quizReducer from "./QuizReducer";
const questionsList = [
  {
    id: 1,
    question: "What is the capital of Nepal ?",
    options: ["Kathmandu", "Bhaktapur", "Lalitpur", "Patan"],
    answer: "Bhaktapur",
  },
  {
    id: 2,
    question: "What is the capital of Japan ?",
    options: ["Fukuoka", "Tokyo", "Hokkaido", "Sendai"],
    answer: "Tokyo",
  },
  {
    id: 3,
    question: "What is the size of Nepal ?",
    options: ["213 km", "13212 km", "6654 km", "899 km"],
    answer: "213 km",
  },
  {
    id: 4,
    question: "Which country does this flag belong to ?",
    options: ["Nepal", "India", "USA", "Canada"],
    answer: "Canada",
    flag: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg",
  },
];

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const initialState = {
    questions: questionsList,
    correct: 0,
    questionNo: 0,
    selectedOptionIndex: NaN,
    answered: false,
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  // dispatch({
  //   type: "SELECT_ANSWER",
  //   payload: questionsList,
  // });
  const currentQuestion = questionsList[0];

  const value = {
    ...state,
    dispatch,
    currentQuestion,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizContext;
