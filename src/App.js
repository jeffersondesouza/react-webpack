import './style/sass/main.scss';
import './App.scss';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

import Header from './components/layout/Header';
import ForceFormContainer from './conteiners/ForceFormContainer';
import PeopleListContainer from './conteiners/PeopleListContainer';


export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ForceFormContainer} />
          <Route path="/list" exact component={PeopleListContainer} />
        </Switch>
      </Router>
    );
  }
}
