import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './style/sass/main.scss';
import FormGoup from './components/forms/FormGoup/FormGoup';
import Form from './components/forms/FormGoup/Form';
import Reservation from './components/Reservation';
import DebugForm from './components/forms/FormGoup/DebugForm';
import InputField from './components/forms/FormGoup/InputField';
import InputFieldArray from './components/forms/FormGoup/InputFieldArray';

import ErrorMessage from './components/forms/FormGoup/ErrorMessage';


export default class App extends Component {
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

  render() {
    const { values } = this.state;

    return (
      <div>
        <h1>Hello world</h1>
        <FormGoup initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
          {(formProps) => {

            return (
              <Form {...formProps}>

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
                        <React.Fragment>
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
                        </React.Fragment>
                      );
                    }
                    }
                  </InputFieldArray>
                </div>


                <DebugForm {...formProps} />
              </Form>
            )
          }}
        </FormGoup>

      </div>
    );
  }
}
