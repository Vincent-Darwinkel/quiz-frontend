import {
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import "./index.css";

export default function QuizResult(props) {
  const { quiz, result, score } = props;
  const questionsCount = quiz?.questions?.length;

  const percentageGood = Math.round((100 / questionsCount) * score);
  const normalise = (value) => (value * 100) / questionsCount;

  const getListItemColor = (correctAnswerNr, answerNr, selectedAnswer) => {
    if (correctAnswerNr === answerNr) {
      return "green";
    } else if (
      selectedAnswer !== correctAnswerNr &&
      selectedAnswer === answerNr
    ) {
      return "red";
    }
  };

  const renderResult = () => {
    return (
      <div>
        <List id="quiz-list">
          {result?.map((question) => {
            const { questionIndex, selectedAnswer } = question;
            const quizQuestion = quiz?.questions[questionIndex];
            const correctAnswerNr = quizQuestion?.correctAnswerNr;
            let questions = [];

            quizQuestion.answers.forEach((answer) => {
              const backgroundColor = getListItemColor(
                correctAnswerNr,
                answer?.nr,
                selectedAnswer
              );
              questions.push(
                <ListItem
                  key={quizQuestion?.uuid + answer?.nr}
                  style={{
                    background: backgroundColor,
                  }}
                >
                  <ListItemText>{answer.answer}</ListItemText>
                </ListItem>
              );
            });

            return (
              <Paper className="quiz-result-paper">
                <p>{quizQuestion.question}</p>
                <hr />
                {questions}
              </Paper>
            );
          })}
        </List>
      </div>
    );
  };

  return (
    <div id="quiz-result">
      <h3>
        {percentageGood >= 55 ? "Goed gedaan!" : "Jammer,"} je score is:{" "}
        {percentageGood}
      </h3>

      <label>Je score in een emoji {percentageGood >= 55 ? "😄" : "💩"}</label>
      <LinearProgress
        color="inherit"
        variant="determinate"
        value={normalise(score)}
      />
      <h3>Je antwoorden</h3>
      {renderResult()}
    </div>
  );
}
