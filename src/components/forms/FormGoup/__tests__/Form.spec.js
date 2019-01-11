import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import InputFieldGroup from '../InputFieldGroup';
import InputField from '../InputField';
import InputFieldArray from '../InputFieldArray';
import Form from '../Form';


describe('<Form>', () => {

  const onSubmitMock = jest.fn();

  const props = {
    handleSubmit: onSubmitMock,
    values: { name: '', },
  };


  test('call handleSubmit when child form make a submit', () => {

    const form = (
      <Form {...props}>
        <InputField {...props} name="name" />
        <button>submit</button>
      </Form>
    );


    const wrapper = mount(form);

    wrapper.find('button').simulate('submit');
    wrapper.find('form').simulate('submit');

    expect(onSubmitMock).toHaveBeenCalledTimes(2);



  });

});