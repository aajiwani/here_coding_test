import React from "react";
import ApiCaller from "lib/ApiCaller";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="flex-container"
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Link to="/repositories">
          <Button bsStyle="primary">
            Let's Begin
          </Button>
        </Link>
      </div>
    );
  }
}
