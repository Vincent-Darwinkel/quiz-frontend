import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { getQuizzes } from "quizes";
import { useState } from "react";
import paths from "services/shared/router-paths";
import "./index.css";

export default function QuizOverview() {
  const onQuizClick = (uuid) => {
    window.location.href = `${paths.Quiz}?uuid=${uuid}`;
  };

  const quizzes = getQuizzes();

  return (
    <div id="quiz-list-overview">
      <h3> De volgende quizen zijn beschikbaar</h3>
      <hr />
      <List>
        {quizzes?.map((quiz) => (
          <ListItem
            key={quiz?.uuid}
            button
            onClick={() => onQuizClick(quiz?.uuid)}
          >
            <ListItemText>{quiz?.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
