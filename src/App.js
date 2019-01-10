import React, { Component } from 'react';

import './style/sass/main.scss';
import Person from './Person';

const title = 'My Minimal React Webpack Babel Setup!!!';

export default class App extends Component {

  render() {
    return (
      <div>
        {title}
        <Person name={'joao'} age={20} />
      </div>
    );
  }
}
