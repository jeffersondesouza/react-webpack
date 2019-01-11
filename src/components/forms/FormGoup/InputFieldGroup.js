import React, { Component } from 'react';
import { inputEventValue } from './utils/InputEventValue';

export default class InputFieldGroup extends Component {


  // pure
  setValue = ({ name, value, props }) => {

    const replaceStg = `${props.name}.`;
    const reg = new RegExp(replaceStg, 'g');
    const key = name.replace(reg, '');

    return {
      ...props.values[props.name],
      [key]: value
    };

  }

  handleChildChange = (event) => {
    const { name, value } = inputEventValue(event);

    this.props.handleChange({
      ...event,
      persist: () => { },
      target: {
        ...event.target,
        name: this.props.name,
        value: this.setValue({ props: this.props, name, value }),
      }
    });

  }

  render() {

    const { name, values } = this.props;

    const obj = Object.keys(this.props.values[name])
      .map((key) => (
        { [`${name}.${key}`]: this.props.values[name][key] }
      ))
      .reduce((t, a) => ({ ...t, ...a }), {});


    return (
      <React.Fragment>
        {this.props.children && this.props.children({
          ...this.props,
          values: obj,
          handleChange: this.handleChildChange
        })}
      </React.Fragment>
    );
  }
}
