import React from "react";
import ReactPromisedComponent from "react-promised-component";
import LoadingComponent from "components/Loading";
import ErrorComponent from "components/Error";
import SuccessComponent from "./components/success_component.js";
import * as UserApi from "api/User";

function sleep (time)
{
  return new Promise((resolve) => setTimeout(resolve, time));
}

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

  promiseGenerator(params) {
    return UserApi.GetRepositories();
  }

  render() {
    return (
      <PromisedReactComponent promise_name={this.promiseGenerator.bind(this)} />
    );
  }
}
