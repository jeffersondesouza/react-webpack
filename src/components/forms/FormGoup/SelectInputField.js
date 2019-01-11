import React from 'react';

const SelectInputField = (props) => {
  return (
    <select
      name={props.name}
      value={props.values[props.name]}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
    >
      {
        props.options.map(optionItem => (
          <option
            key={optionItem}
            value={optionItem}
          >
            {optionItem}
          </option>
        ))
      }
    </select>
  );
}
export default SelectInputField;