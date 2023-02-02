const quizReducer = (state, action) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };

    case "SELECT_OPTION":
      return {
        ...state,
        selectedOptionIndex: action.payload,
        answered: true,
      };
    case "CORRECT":
      return {
        ...state,
        correct: action.payload,
      };
    case "NEXT":
      return {
        ...state,
        questionNo: action.payload,
        selectedOptionIndex: NaN,
        answered: false,
      };
    case "TRY_AGAIN":
      return {
        ...state,
        answered: false,
        selectedOptionIndex: NaN,
        questionNo: 0,
        correct: 0,
      };
    default:
      return state;
  }
};

export default quizReducer;
