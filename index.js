import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./src/App";
import Repositories from "views/Repositories/index";
import RepositoryLanguages from "views/RepositoryLanguages/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/repositories" component={Repositories} />
      <Route path="/languages/:repo" component={RepositoryLanguages} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
