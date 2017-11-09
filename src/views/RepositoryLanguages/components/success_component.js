import React from 'react';
import {Grid, Row, Col, Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import _ from 'lodash';

export default class SuccessComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack() {
    this.props.goBack();
  }

  getLanguageTable(data) {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Language</th>
            <th># of Bytes</th>
          </tr>
        </thead>
        <tbody>
          {_.map(data, (val, ind) => {
            return (
              <tr key={'key-' + ind}>
                <td>{ind + 1}</td>
                <td>{val.name}</td>
                <td>{val.bytes}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Button bsStyle="primary" onClick={this.goBack.bind(this)}>
              Back
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} xsOffset={6} className="text-center">
            <h2 style={{color: 'grey'}}>{this.props.repo_name}</h2>
          </Col>
        </Row>
        {_.size(this.props.result) > 0 ? (
          this.getLanguageTable(this.props.result)
        ) : (
          <Row>
            <Col xs={12} md={6} xsOffset={6} className="text-center">
              <h4>No language data found</h4>
            </Col>
          </Row>
        )}
      </Grid>
    );
  }
}
