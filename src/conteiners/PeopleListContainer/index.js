import React, { Component } from 'react';
import './styles.scss';

import PeopleList from '../../components/lists/PeopleList';

const MOCK = [{
  "id": 1,
  "name": "Luke Skywalker",
  "mass": "77",
  "jedi": true,
  "sith": false,
  "films": ["films 2", "films 6", "films 3", "films 1", "films 7"]
}, {
  "id": 2,
  "name": "Leia Skywalker",
  "mass": "55",
  "jedi": false,
  "sith": false,
  "films": ["films 2", "films 6", "films 3", "films 1", "films 7"]
}];


class PeopleListContainer extends Component {

  constructor() {
    super();
    this.state = {
      people: MOCK
    }

  }


  render() {
    const { people } = this.state;

    return (
      <div className="container">
        <h3>Peoople</h3>
        <PeopleList people={people} />
      </div>
    )
  }
}

export default PeopleListContainer;