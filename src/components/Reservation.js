import React, { Component } from 'react';
import FormGoup from './forms/FormGoup/FormGoup';
import Form from './forms/FormGoup/Form';
import InputFieldGroup from './forms/FormGoup/InputFieldGroup';
import DebugForm from './forms/FormGoup/DebugForm';
import InputField from './forms/FormGoup/InputField';
import ErrorMessage from './forms/FormGoup/ErrorMessage';

export default class Reservation extends Component {

  constructor() {
    super();

    this.state = {
      values: {
        parent: {

          phone: {
            code: '00',
            number: '123445',
          },
          name: 'Ze'
        },
        name: '',
        birthday: '1987-12-12',
        state: 'PB',
        city: 'patos',
        parentPhoneCode: '22',
        parentPhoneNumber: '9999-9999',
        phones: [
          { code: "22", number: '123459' },
          { code: "33", number: '999999' },
        ],
/*         license: {
          number: '12345678',
          issuedAt: '2018-12-12'
        },
        emails: [
          { number: '123459' }
        ],
 */      },
      fruits: [
        'Manga',
        'Laranja',
        'Banana',
        'Limão'
      ],
      documents: [
        'cpf',
        'cnpj'
      ]
    };
  }

  handleSubmit = (values, { resetForm }) => {
    console.log(JSON.stringify(values, null, 2));
    resetForm();
  };


  validateName = (values) => {
    let errors = {};

    errors.name = (!values.name)
      ? 'Please inform the name'
      : null;


    return errors;
  }

  validateCity = (values) => {
    let errors = {};

    errors.city = (!values.city)
      ? 'City is required'
      : null;

    return errors;
  }

  validate = (values) => {
    return {
      ...this.validateName(values),
      ...this.validateCity(values)
    };
  }

  render() {
    return (
      <FormGoup initialValues={this.state.values} validate={this.validate} onSubmit={this.handleSubmit}>
        {(formProps) => {

          return (
            <div>
              <Form {...formProps}>

                <div className="form-group">
                  <label>Patent Phone</label>
                  <InputFieldGroup name="parent" {...formProps}>
                    {(props) => {
                      return (
                        <React.Fragment>
                          <InputField {...props} name="parent.name" />

                          <InputFieldGroup {...formProps} name="parent.phone" values={props.values} >
                            {(props) => {
                              return (
                                <React.Fragment>
                                  <InputField {...props} values={props} name="phone.code" />
                                  <InputField {...props} values={props} name="phone.number" />
                                </React.Fragment>
                              )
                            }
                            }
                          </InputFieldGroup>

                          {/*  <InputFieldGroup name="parent.phone" {...props}>
                            {(props) => {
                              return (
                                <React.Fragment>
                                  <InputField {...props} values={props.} name="phone.name" />
                                  <InputField {...props} values={props.} name="phone.phone" />
                                  <ErrorMessage {...formProps} name="name" className={'error-feedback2'} />
                                </React.Fragment>
                              )
                            }
                            }
                          </InputFieldGroup> */}




                          <ErrorMessage {...formProps} name="name" className={'error-feedback2'} />
                        </React.Fragment>
                      )
                    }
                    }
                  </InputFieldGroup>
                </div>
{/* 



                <div className="form-group">
                  <label>City</label>
                  <InputField name="city" {...formProps} />
                  <ErrorMessage {...formProps} name="city" />

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
 */}

                <button type="submit">Submit</button>
              </Form>
              <DebugForm {...formProps} />
            </div>
          )
        }
        }
      </FormGoup>
    );
  }

}