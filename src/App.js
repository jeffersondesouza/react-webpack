import React, { Component } from 'react';
import axios from 'axios';

import './style/sass/main.scss';


export default class App extends Component {

  componentDidMount() {
    axios.get('/').
      then(res => res.data)
      .then(console.log)

  }

  render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}
