import Person from './Person';

function sumatorio(a, b) {
  return a + b;
}

new Person().soma(1, 2)

console.log('loads')


import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup!!!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);