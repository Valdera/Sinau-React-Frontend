import React from 'react';

import './form-input.styles.scss';

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="form-input__group">
      <input
        onChange={handleChange}
        className="form-input__input"
        {...otherProps}
      />
      {label ? <label className="form-input__label">{label}</label> : null}
    </div>
  );
}

export default FormInput;
