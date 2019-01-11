import React, { Component, Fragment } from 'react';

import './force-form-container.scss';

import {
  Form,
  ErrorMessage,
  DebugForm,
  InputField,
  InputFieldArray,
  FormGroup
} from '../../components/forms/FormWrapper';

class ForceFormContainer extends Component {

  constructor() {
    super();
    this.state = {
      values: {
        emial: 'joao@email.com',
        name: 'joao',
        phones: []
      }
    }

  }

  handleSubmit = (v) => {
    console.log('v', v);
  }

  render() {

    const { values } = this.state;

    return (
      <FormGroup initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
        {(formProps) =>
          <div className="force-form__block">
            <Form {...formProps} className="force-form__form">
              <div>
                <label>Email</label>
                <InputField name="name" {...formProps} />
                <ErrorMessage  {...formProps} name="email" />
              </div>

              <div className="form-group">
                <label>Fones</label>
                <InputFieldArray name="phones" {...formProps} >
                  {(inputArrayProps) => {
                    const { arrayHelpers, handleAddMore } = inputArrayProps;

                    return (
                      <Fragment>
                        {
                          arrayHelpers.map((item, i) => (
                            !item[`destroy.${i}`] && <div key={i} >
                              <InputField {...inputArrayProps} type="number" name={`code.${i}`} values={item} />
                              <InputField {...inputArrayProps} type="number" name={`number.${i}`} values={item} />
                              <InputField {...inputArrayProps} type="checkbox" name={`destroy.${i}`} values={item} />
                            </div>
                          ))
                        }
                        <button
                          type="button"
                          className="btn btn--block"
                          onClick={() => handleAddMore('code', 'number', 'destroy')}>
                          + Add more
                      </button>
                      </Fragment>
                    );
                  }
                  }
                </InputFieldArray>
                <button>submit</button>
              </div>
            </Form>
            <DebugForm {...formProps} className="force-form__debug"/>
          </div>
        }
      </FormGroup>

    )
  }
}

export default ForceFormContainer;