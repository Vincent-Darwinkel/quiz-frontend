import { Button, List, ListItem, ListItemText, Paper } from "@mui/material";
import QuizResult from "components/quiz-result";
import { getQuizByUuid } from "quizes";
import { useState } from "react";
import {
  convertMinusToNewLine,
  stringIsEmpty,
} from "services/shared/string-helper";
import "./index.css";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState([]);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const uuid = Object.values(params)[0];
  const quiz = getQuizByUuid(uuid);

  const submitAnswer = async (answerNr) => {
    if (answered) {
      return;
    }

    setAnswered(true);
    let newResult = result;
    newResult.push({
      questionIndex: currentQuestionIndex,
      selectedAnswer: answerNr,
    });

    setResult(newResult);

    if (quiz?.questions[currentQuestionIndex]?.correctAnswerNr === answerNr) {
      document.getElementById(quiz?.uuid + answerNr).style.background = "green";
      setScore(score + 1);
      return;
    }

    document.getElementById(quiz?.uuid + answerNr).style.background = "red";
    const correctAnswerNr =
      quiz?.questions[currentQuestionIndex]?.correctAnswerNr;
    document.getElementById(quiz?.uuid + correctAnswerNr).style.background =
      "green";
  };

  const showResults = () => {
    setQuizFinished(true);
  };

  const nextQuestion = () => {
    setAnswered(false);
    const answersLength = quiz?.questions[currentQuestionIndex].length;
    for (let index = 0; index < answersLength; index++) {
      document.getElementById(quiz?.uuid + index).style.background = "";
    }

    for (let index = 0; index < 5; index++) {
      try {
        document.getElementById(quiz?.uuid + index).style.background = "";
      } catch (error) {}
    }

    if (quiz.questions.length <= currentQuestionIndex + 1) {
      showResults();
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return quizFinished ? (
    <QuizResult quiz={quiz} result={result} score={score} />
  ) : (
    <div id="quiz">
      <h1>{quiz?.name}</h1>
      <p>{quiz?.questions[currentQuestionIndex]?.question}</p>
      <hr />
      <Paper>
        <List id="quiz-list">
          {quiz?.questions[currentQuestionIndex]?.answers?.map((answer) => (
            <ListItem
              button
              key={quiz?.uuid + answer?.nr}
              id={quiz?.uuid + answer?.nr}
              onClick={() => submitAnswer(answer?.nr)}
            >
              <ListItemText>
                {convertMinusToNewLine(answer.answer)}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
      {answered ? (
        <Button onClick={nextQuestion} size="large" id="next-question">
          Volgende
        </Button>
      ) : null}
      {answered &&
      !stringIsEmpty(quiz?.questions[currentQuestionIndex]?.substantiation) ? (
        <div className="fade-up" id="substantiation">
          <p>Uitleg</p>
          <hr />
          {convertMinusToNewLine(
            quiz?.questions[currentQuestionIndex]?.substantiation
          )}
        </div>
      ) : null}
    </div>
  );
}
