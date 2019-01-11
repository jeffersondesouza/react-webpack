import React, { Component, Fragment } from 'react';
import './style/sass/main.scss';
import './App.scss';


import Header from './components/layout/Header';
import ForceFormContainer from './conteiners/ForceFormContainer';
import PeopleListContainer from './conteiners/PeopleListContainer';


export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <ForceFormContainer />
        <PeopleListContainer />
      </div>
    );
  }
}
