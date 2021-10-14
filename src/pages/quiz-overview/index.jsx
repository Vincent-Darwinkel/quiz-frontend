import { List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import paths from "services/shared/router-paths";
import "./index.css";

export default function QuizOverview() {
  const [quizzes, setQuizzes] = useState([
    {
      uuid: "dcad778a-efce-4629-b039-a892cb8ec161",
      name: "Toets 1",
    },
  ]);

  const onQuizClick = (uuid) => {
    window.location.href = `${paths.Quiz}?uuid=${uuid}`;
  };

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
