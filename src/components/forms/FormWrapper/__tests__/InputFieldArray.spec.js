import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import InputFieldGroup from '../InputFieldGroup';
import InputField from '../InputField';
import InputFieldArray from '../InputFieldArray';


describe('<InputFieldGroup>', () => {

  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();

  const props = {
    handleChange: onChangeMock,
    handleBlur: onBlurMock,
    values: {
      people: [
        { name: 'custom name', },
        { name: 'custom name 2', },
      ]
    },
  };

  test('call handle change inpu had onCanhe event calledomponent', () => {


    const inputFieldGroup = (
      <InputFieldArray name="people" {...props} >
        {(inputArrayProps) => {
          const { arrayHelpers, handleAddMore } = inputArrayProps;
          return (
            <Fragment>
              {
                arrayHelpers.map((item, i) => (
                  <InputField key={i} {...inputArrayProps} type="number" name={`name.${i}`} values={item} />
                ))
              }
              <button type="button" onClick={() => handleAddMore('code', 'number', 'destroy')}>+</button>
            </Fragment>
          );
        }}
      </InputFieldArray>
    );


    const wrapper = mount(inputFieldGroup);

    wrapper.find('input').at(0).simulate('change');
    expect(onChangeMock).toHaveBeenCalled();

    wrapper.find('input').at(1).simulate('change');
    expect(onChangeMock).toHaveBeenCalled();

    wrapper.find('button').simulate('click');

    expect(onChangeMock).toHaveBeenCalled();


    const tree = renderer.create(inputFieldGroup).toJSON()
    expect(tree).toMatchSnapshot();

  });



  test('call handle change inpu had onCanhe event calledomponent', () => {

    const newPropsState = {
      ...props,
      values: {
        people: []
      },
    }

    const inputFieldGroup = (
      <InputFieldArray name="people" {...newPropsState} >
        {(inputArrayProps) => {
          const { arrayHelpers, handleAddMore } = inputArrayProps;
          return (
            <Fragment>
              {
                arrayHelpers.map((item, i) => (
                  <InputField key={i} {...inputArrayProps} type="number" name={`name.${i}`} values={item} />
                ))
              }
              <button type="button" onClick={() => handleAddMore('code', 'number', 'destroy')}>+</button>
            </Fragment>
          );
        }}
      </InputFieldArray>
    );

    const wrapper = mount(inputFieldGroup);

    const input = wrapper.find('input').length;
    expect(input).toBe(0);
    wrapper.find('button').simulate('click');
    expect(onChangeMock).toHaveBeenCalled();

    const tree = renderer.create(inputFieldGroup).toJSON()
    expect(tree).toMatchSnapshot();

  });




});