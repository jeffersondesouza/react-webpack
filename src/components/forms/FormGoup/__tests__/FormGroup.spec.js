import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import InputFieldGroup from '../InputFieldGroup';
import InputField from '../InputField';
import InputFieldArray from '../InputFieldArray';
import Form from '../Form';
import FormGoup from '../FormGoup';
import ErrorMessage from '../ErrorMessage';


describe('<FormGroup>', () => {

  const handleSubmit = jest.fn(values, { resetForm });
  const handleBlur = jest.fn(values, { resetForm });
  const resetForm = () => { };
  const validate = () => ({});


  const values = {
    emial: 'joao@email.com',
    name: 'joao',
    phones: []
  }

  let form;
  let wrapper;

  beforeAll(() => {
    form = (
      <FormGoup
        initialValues={values}
        validate={validate}
        onSubmit={handleSubmit}>
        {(formProps) => {

          return (
            <Form {...formProps}>

              <div>
                <label>Email</label>
                <InputField name="name"  {...formProps} validateOnChange={true} />
                <ErrorMessage  {...formProps} name="email" />
              </div>


              <div className="form-group">
                <label>Fones</label>
                <InputFieldArray name="phones" {...formProps} >
                  {(inputArrayProps) => {
                    const { arrayHelpers, handleAddMore } = inputArrayProps;

                    return (
                      <React.Fragment>
                        {
                          arrayHelpers.map((item, i) => (
                            !item[`destroy.${i}`] && <div key={i} >
                              <InputField {...inputArrayProps} type="number" name={`code.${i}`} values={item} />
                            </div>
                          ))
                        }
                        <button
                          type="button"
                          className="btn--block"
                          onClick={() => handleAddMore('code', 'number', 'destroy')}>+</button>
                      </React.Fragment>
                    );
                  }
                  }
                </InputFieldArray>
              </div>
            </Form>
          )
        }}
      </FormGoup>
    );


    wrapper = mount(form);
  });


  describe('when mount the from group and click 2 times on add phone button', () => {

    it('should add to pohones input to the form', () => {

      const addMoreBtn = wrapper.find('InputFieldArray').find('button');

      // tree with Zero phones inputs
      let tree = renderer.create(form).toJSON()
      expect(tree).toMatchSnapshot();
      wrapper.find('input').at(0).simulate('blur');
      wrapper.find('input').at(0).simulate('change');

      // tree with One phones inputs
      addMoreBtn.simulate('click');
      tree = renderer.create(form).toJSON()
      expect(tree).toMatchSnapshot();

      // tree with Two phones inputs
      addMoreBtn.simulate('click');
      tree = renderer.create(form).toJSON()
      expect(tree).toMatchSnapshot();


      const inputs = wrapper.find('InputFieldArray').find('input').length;
      expect(inputs).toBe(2);

    });

  });

  describe('when submit the form', () => {

    it('should submit with the current value', () => {

      wrapper.props().onSubmit = jest.fn(values, { resetForm });

      wrapper.find('form').simulate('submit');



      const subValues = {
        emial: "joao@email.com",
        name: "joao",
        phones: [
          { code: '', destroy: '', number: '' },
          { code: '', destroy: '', number: '' }
        ],
      }

      const resetForm = () => { };

      expect(wrapper.props().onSubmit).toHaveBeenCalled();

    });

  });


});