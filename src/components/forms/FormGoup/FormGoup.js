import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { inputEventValue } from './utils/InputEventValue';

class FormGoup extends Component {

  initialFormState = {
    touched: {},
    errors: {},
    dirty: {},
    hasErrors: false
  }

  constructor(props) {
    super(props);

    this.state = {
      ...this.initialFormState,
      values: this.props.initialValues || {},
      initialValues: this.props.initialValues
    };
  }


  handleChange = (event, validateOnChange) => {
    const { name, value } = inputEventValue(event);


    this.setState(prevState => {

      const values = {
        ...prevState.values,
        [name]: value
      }

      if (validateOnChange) {
        const errors = this.getValidationErros(this.props, prevState.errors, values);
        return {
          values,
          errors,
        };
      }

      return {
        values,
      };

    });
  }



  handleBlur = (event) => {
    event.persist();

    const target = event.target;
    const name = target.name;

    this.setState(prevState => {
      return ({
        touched: {
          ...prevState.touched,
          [name]: true
        }
      })

    });

  }



  getValidationErros = (props, prevStateErrors, values) => {

    if (!props.validate) {
      return {};
    }

    const errors = props.validate(values);
    const hasErrors = Object.keys(errors).map(key => errors[key]).some(value => value);

    return {
      ...prevStateErrors,
      ...errors,
      hasErrors
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();
    // validate
    const errors = this.getValidationErros(this.props, this.state.errors, this.state.values);

    if (errors.hasErrors) {
      this.setState({
        errors
      })
    } else {
      this.props.onSubmit(this.state.values, { resetForm: this.resetForm });
    }


  }


  resetForm = () => {
    this.setState({
      ...this.initialFormState,
      values: { ...this.props.initialValues }
    });
  }

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit,
      handleReset: this.handleReset,
    });
  }
}


FormGoup.propTypes = {
  initialValues: PropTypes.object.isRequired
}

export default FormGoup;
