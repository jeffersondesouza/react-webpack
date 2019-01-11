import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import InputField from '../InputField';



test('call handle change inpu had onCanhe event calledomponent', () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();

  const props = {
    handleChange: onChangeMock,
    handleBlur: onBlurMock,
    values: {
      name: 'custom name',
    },
  };

  const component = <InputField name="name" {...props} />
  const wrapper = shallow(component);
  wrapper.find('input').simulate('change');
  wrapper.find('input').simulate('blur');


  const tree = renderer.create(component).toJSON();

  expect(onChangeMock).toHaveBeenCalled();
  expect(onBlurMock).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});


test('call handle change input onCanhe (Snapshot whitou name param value) ', () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();

  const props = {
    handleChange: onChangeMock,
    handleBlur: onBlurMock,
    values: { name: '', },
  };

  const component = <InputField name="name" {...props} />
  const wrapper = shallow(component);
  wrapper.find('input').simulate('change');
  wrapper.find('input').simulate('blur');


  const tree = renderer.create(component).toJSON();

  expect(onChangeMock).toHaveBeenCalled();
  expect(onBlurMock).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
