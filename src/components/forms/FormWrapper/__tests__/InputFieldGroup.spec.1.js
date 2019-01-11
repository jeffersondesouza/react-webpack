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
      person: {
        name: 'custom name',
        email: 'custom@emil.com',
      }
    },
  };

  test('call handle change input had onChange event called', () => {

    const inputFieldGroup = (
      <InputFieldGroup name="person" {...props}>
        {(propsGroup) => {
          return (
            <React.Fragment>
              <InputField {...propsGroup} name="person.name" />
              <InputField {...propsGroup} name="person.email" />
            </React.Fragment>
          )
        }}
      </InputFieldGroup>
    );


    const wrapper = mount(inputFieldGroup);

    wrapper.find('input').at(0).simulate('change');
    expect(onChangeMock).toHaveBeenCalled();

    wrapper.find('input').at(1).simulate('change');
    expect(onChangeMock).toHaveBeenCalled();

    const tree = renderer.create(inputFieldGroup).toJSON()
    expect(tree).toMatchSnapshot();

  });



  test('call handle change inpu had onCanhe event calledomponent', () => {

    const newPropsState = {
      ...props,
      values: {
        person: {
          name: 'custom name',
          email: 'custom@emil.com',
        }
      },
    }

    const inputFieldGroup = (
      <InputFieldGroup name="person" {...props}>
        {(propsGroup) => {
          return (
            <React.Fragment>
              <InputField {...propsGroup} name="person.name" />
              <InputField {...propsGroup} name="person.email" />
            </React.Fragment>
          )
        }}
      </InputFieldGroup>
    );

    const wrapper = mount(inputFieldGroup);

    wrapper.find('input').at(0).simulate('change');
    expect(onChangeMock).toHaveBeenCalled();

    wrapper.find('input').at(1).simulate('change');
    expect(onChangeMock).toHaveBeenCalled();

    const tree = renderer.create(inputFieldGroup).toJSON()
    expect(tree).toMatchSnapshot();
  });




});