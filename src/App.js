import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './style/sass/main.scss';
import Form from './components/forms/FormWrapper/Form';
import Reservation from './components/Reservation';



import {
  ErrorMessage,
  DebugForm,
  InputField,
  InputFieldArray,
  FormGroup
} from './components/forms/FormWrapper';




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

  handleSubmit = (v)=>{
    console.log('v', v);
  }
  
  render() {
    const { values } = this.state;



    return (
      <div>
        <h1>Hello world</h1>
        <i className="icon-rebel"></i>
        <FormGroup initialValues={values} validate={this.validate} onSubmit={this.handleSubmit}>
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
                  <button>submit</button>
                </div>


                <DebugForm {...formProps} />
              </Form>
            )
          }}
        </FormGroup>

      </div>
    );
  }
}
