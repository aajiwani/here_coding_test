import React from "react";
import ReactPromisedComponent from "react-promised-component";
import LoadingComponent from "components/Loading";
import ErrorComponent from "components/Error";
import SuccessComponent from "./components/success_component.js";
import * as RepoApi from "api/Repo";

var PromisedReactComponent = ReactPromisedComponent(
  "promise_name",
  LoadingComponent,
  ErrorComponent,
  SuccessComponent
);

export default class PromisedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // Promise creator method
  promiseGenerator(params) {
    return RepoApi.GetLanguages(this.props.match.params.repo);
  }

  render() {
    return (
      <PromisedReactComponent
        promise_name={this.promiseGenerator.bind(this)}
        repo_name={this.props.match.params.repo}
        goBack={() => this.props.history.goBack()}
      />
    );
  }
}
