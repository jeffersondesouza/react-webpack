import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ErrorMessage from '../ErrorMessage';


describe('<ErrorMessage>', () => {

  const onSubmitMock = jest.fn();

  const props = {
    handleSubmit: onSubmitMock,
    values: { name: '', },
    touched:{},
    errors:{}

  };

  it('should have a error when touched', () => {
    const errorMessage = (
      <ErrorMessage name="name" {...props} />
    );

    const tree = renderer.create(errorMessage).toJSON();
    expect(tree).toMatchSnapshot();

  });

  it('should have a error when touched', () => {

    const errors = { name: 'Name is Required' }
    const errorMessage = (
      <ErrorMessage name="name" {...props} errors={errors} />
    );
    expect(errorMessage.props.errors.name).toContain('Name is')

    const tree = renderer.create(errorMessage).toJSON();
    expect(tree).toMatchSnapshot();

  });





});