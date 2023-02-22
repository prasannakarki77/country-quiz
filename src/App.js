import React from "react";
import Quiz from "./component/Quiz";
import "./styles/app.scss";
import { MessengerChat } from "react-messenger-chat-plugin";
import { QuizProvider } from "./contexts/QuizContext";
const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Country Quiz</h1>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      <MessengerChat
        pageId="100084275209874"
        language="sv_SE"
        themeColor={"#000000"}
        bottomSpacing={300}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
      />
      <footer className="footer">
        created by{" "}
        <a
          href="https://devchallenges.io/portfolio/prasannakarki77"
          target="_blank"
          rel="noreferrer"
        >
          prasannakarki77
        </a>{" "}
        - devchallenges.io
      </footer>
    </div>
  );
};

export default App;
