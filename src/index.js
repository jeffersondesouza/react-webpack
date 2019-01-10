import React from 'react';
import ReactDOM from 'react-dom';

import Person from './Person';

const title = 'My Minimal React Webpack Babel Setup!!!';

ReactDOM.render(
  <div>
    {title}
    <Person name={'joao'} age={20} />
  </div>,
  document.getElementById('app')
);