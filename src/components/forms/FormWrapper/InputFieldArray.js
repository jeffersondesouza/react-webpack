import React, { Component } from 'react';
import { inputEventValue } from './utils/InputEventValue';

export default class InputFieldArray extends Component {

  handleArrayChange = (event) => {
    const { name, value } = inputEventValue(event);


    const valueArray = this.props.values[this.props.name].map((item, i) => {
      const key = name.split('.')[0];
      const keyIndex = +name.split('.')[1];

      if (i === keyIndex) {
        return {
          ...item,
          [key]: value
        }
      }

      return {
        ...item,
      }
    });

    this.props.handleChange({
      ...event,
      persist: () => { },
      target: {
        ...event.target,
        name: this.props.name,
        value: valueArray,
      }
    });

  }

  handleAddMore = (...params) => {

    const newInstance = params.map((param) => (
        { [param]: '' }
      ))
      .reduce((t, a) => ({ ...t, ...a }), {});

    this.props.handleChange({
      persist: () => { },
      target: {
        name: this.props.name,
        value: [...this.props.values[this.props.name], newInstance],
      }
    });
  }

  getArrayHelpers = (props) => {

    if (!props) {
      return []
    }

    const { values, name } = this.props;

    return !values[name] ?
      []
      : values[name].map((item, i) => {
        return Object.keys(item)
          .map((key) => (
            { [`${key}.${i}`]: item[key] }
          ))
          .reduce((t, a) => ({ ...t, ...a }), {});
      });

  }

  render() {

    const props = {
      ...this.props,
      arrayHelpers: this.getArrayHelpers(this.props),
      handleChange: this.handleArrayChange,
      handleAddMore: this.handleAddMore
    };

    return (
      <React.Fragment>
        {this.props.children && this.props.children(props)}
      </React.Fragment>
    );
  }
}
