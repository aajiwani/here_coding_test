import React from "react";
import { ListGroup, Image, Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";

const RepositoryListItem = class extends React.Component {
  render() {
    return (
      <Link
        to={{
          pathname: "/languages/" + this.props.repo_name
        }}
      >
        <li className="list-group-item">
          <Grid>
            <Row>
              <Col xs={3} md={1}>
                <Image
                  src={this.props.repo_img}
                  circle
                  style={{ width: 50, height: 50 }}
                />
              </Col>
              <Col xs={15} md={11}>
                <div>{this.props.repo_name}</div>
              </Col>
            </Row>
          </Grid>
        </li>
      </Link>
    );
  }
};

export default class SuccessComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // this.props.result could be used to retrieve promise results
    return (
      <Grid>
        <Row>
          <Col xs={3} md={1} xsOffset={6}>
            <ListGroup>
              {_.map(this.props.result, val => {
                return (
                  <RepositoryListItem
                    key={"key-" + val.full_name}
                    repo_img={val.image}
                    repo_full_name={val.full_name}
                    repo_name={val.name}
                  />
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
