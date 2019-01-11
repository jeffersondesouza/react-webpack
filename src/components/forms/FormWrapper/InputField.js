import React from 'react';


const InputField = (props) => {

  return (
    <input
      className={props.className || ''}
      name={props.name}
      type={props.type || 'text'}
      value={props.radioValue || props.values[props.name]}
      checked={props.checked}
      onBlur={props.handleBlur}
      onChange={event=>props.handleChange(event, props.validateOnChange || false )}
    />
  );
}

export default InputField;