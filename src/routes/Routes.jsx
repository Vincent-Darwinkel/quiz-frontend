import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import routerPaths from "services/shared/router-paths";
import QuizOverview from "pages/quiz-overview";
import Quiz from "pages/quiz";

function routes() {
  return (
    <BrowserRouter>
      <Route exact path={routerPaths.Root} component={QuizOverview} />
      <Route exact path={routerPaths.Quiz} component={Quiz} />
    </BrowserRouter>
  );
}

export default routes;
