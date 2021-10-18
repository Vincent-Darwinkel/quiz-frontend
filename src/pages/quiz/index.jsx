import { Button, List, ListItem, ListItemText, Paper } from "@mui/material";
import { getQuizByUuid } from "quizes";
import { useState } from "react";
import "./index.css";

export default function Quiz() {
  const [currentQuestionOrderNr, setCurrentQuestionOrderNr] = useState(0);
  const [answered, setAnswered] = useState(false);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const uuid = Object.values(params)[0];
  const quiz = getQuizByUuid(uuid);

  const submitAnswer = async (answerNr) => {
    if (answered) {
      return;
    }
    setAnswered(true);
    if (quiz?.questions[currentQuestionOrderNr]?.correctAnswerNr === answerNr) {
      document.getElementById(quiz?.uuid + answerNr).style.background = "green";
      return;
    }

    document.getElementById(quiz?.uuid + answerNr).style.background = "red";
  };

  return (
    <div id="quiz">
      <h1>{quiz?.name}</h1>
      <p>{quiz?.questions[currentQuestionOrderNr]?.question}</p>
      <hr />
      <Paper>
        <List id="quiz-list">
          {quiz?.questions[currentQuestionOrderNr]?.answers?.map((answer) => (
            <ListItem
              button
              key={quiz?.uuid + answer?.nr}
              id={quiz?.uuid + answer?.nr}
              onClick={() => submitAnswer(answer?.nr)}
            >
              <ListItemText>{answer.answer}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button size="large" id="next-question">
        Volgende vraag
      </Button>
    </div>
  );
}
