import React, { Component, Fragment } from 'react';
import './style/sass/main.scss';
import './App.scss';


import Header from './components/layout/Header';
import ForceFormContainer from './conteiners/ForceFormContainer';
import PeopleList from './components/lists/PeopleList';



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


export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <ForceFormContainer />
        <PeopleList people={MOCK} />
      </div>
    );
  }
}
