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
        name: '',
        mass: '',
        jedi: '',
        sith: '',
        films: []
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
              <div className="form-group">
                <label>Name</label>
                <InputField name="name" {...formProps} />
                <ErrorMessage  {...formProps} name="name" />
              </div>

              <div className="form-group">
                <label>Mass</label>
                <InputField name="mass" {...formProps} />
                <ErrorMessage  {...formProps} name="mass" />
              </div>

              <div className="form-group">
                <label>Jedi</label>
                <InputField name="jedi" type="checkbox" {...formProps} />
                <ErrorMessage  {...formProps} name="jedi" />
              </div>

              <div className="form-group">
                <label>Sith</label>
                <InputField name="sith" type="checkbox" {...formProps} />
                <ErrorMessage  {...formProps} name="sith" />
              </div>


              <div className="form-group">
                <label>Films</label>
                <InputFieldArray name="films" {...formProps} >
                  {(inputArrayProps) => {
                    const { arrayHelpers, handleAddMore } = inputArrayProps;

                    return (
                      <Fragment>
                        {
                          arrayHelpers.map((item, i) => (
                            !item[`destroy.${i}`] && <div key={i} >
                              <InputField {...inputArrayProps} name={`title.${i}`} values={item} />
                            </div>
                          ))
                        }
                        <button
                          type="button"
                          className="btn btn--block"
                          onClick={() => handleAddMore('title')}>
                          + Add more
                      </button>
                      </Fragment>
                    );
                  }
                  }
                </InputFieldArray>
                <div>
                  <button>submit</button>
                </div>
              </div>
            </Form>
            <DebugForm {...formProps} className="force-form__debug" />
          </div>
        }
      </FormGroup>

    )
  }
}

export default ForceFormContainer;