import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { useState } from "react";
import "./index.css";

export default function Quiz() {
  const [currentQuestionOrderNr, setCurrentQuestionOrderNr] = useState(0);
  const [quiz, setQuiz] = useState({
    uuid: "427a2267-2733-441f-ace6-83f5eac99ae4",
    name: "Toets 1",
    questions: [
      {
        uuid: "85d3360f-6955-4fd8-a19d-1f67dd73e647",
        orderNr: 0,
        question: "Vraag: Wat doet een regressietest?",
        answers: [
          {
            uuid: "e5d83f84-58b8-4ee3-8a82-b0ac25c334d2",
            answer:
              "Kijken of er geen componenten in een systeem zijn aangepast",
          },
          {
            uuid: "335abb72-f4a8-44ef-9d81-8e7bcd5dc9ac",
            answer: "Testen",
          },
        ],
      },
    ],
  });

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const uuid = Object.values(params)[0];

  const getQuiz = async (uuid) => {};
  const submitAnswer = async (uuid) => {};

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
              key={answer?.uuid}
              onClick={() => submitAnswer(answer?.uuid)}
            >
              <ListItemText>{answer.answer}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
