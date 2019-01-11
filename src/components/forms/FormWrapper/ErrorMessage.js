import React from 'react';


const ErrorMessage = (props) => {

  const { name, errors, touched, values } = props;

  return (
    <div className={`error-feedback ${props.className}`}>
      {errors[name] && (touched[name] || !values[name]) && errors[name]}
   </div>
  );
}

export default ErrorMessage;