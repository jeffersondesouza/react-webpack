import React from 'react';

const Form = ({ children, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {children}
  </form>
);

export default Form;