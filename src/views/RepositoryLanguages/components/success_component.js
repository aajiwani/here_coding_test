import React from "react";
import { Grid, Image, Row, Col, ControlLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import _ from "lodash";

export default class SuccessComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack() {
    this.props.goBack();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col style={{ display: "flex", justifyContent: "flex-start" }}>
            <Button bsStyle="primary" onClick={this.goBack.bind(this)}>
              Back
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} xsOffset={6} className="text-center">
            <ControlLabel bsSize="large">
              Repository: {this.props.repo_name}
            </ControlLabel>
          </Col>
        </Row>
        {_.size(this.props.result) > 0 ? (
          _.map(this.props.result, (val, ind) => {
            return (
              <Row key={"key-" + ind}>
                <Col xs={9} md={6}>
                  {val.name}
                </Col>
                <Col xs={9} md={6} xsOffset={9} mdOffset={6}>
                  {val.bytes}
                </Col>
              </Row>
            );
          })
        ) : (
          <div>No languages are there to be displayed</div>
        )}
      </Grid>
    );
  }
}
