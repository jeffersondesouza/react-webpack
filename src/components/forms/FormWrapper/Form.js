import React from 'react';

const Form = ({ children, handleSubmit, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    {children}
  </form>
);

export default Form;