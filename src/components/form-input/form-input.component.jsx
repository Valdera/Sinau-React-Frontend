import React from 'react';

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="form__group" onChange={handleChange} {...otherProps}>
      {label ? <label className="form-input__label"></label> : null}
    </div>
  );
}

export default FormInput;
