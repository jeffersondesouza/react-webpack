import React from 'react';
import { shallow } from 'enzyme';

import Person from './Person';

function setup() {
  const wrapper = shallow(<Person />);
  return { wrapper };
}


it('Reder a Person', () => {

  const { wrapper } = setup();

  expect(wrapper.find('img').exists()).toBe(true);

});
