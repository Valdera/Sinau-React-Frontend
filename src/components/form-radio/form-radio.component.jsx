import React from 'react';

import './form-radio.styles.scss';

function FormRadio({ handleChange, label, items, ...otherProps }) {
  return (
    <div className="form-radio">
      {items.map((item) => (
        <div
          className="form-radio__group"
          style={{ width: `${100 / items.length}%` }}
          key={`radio-${item}`}>
          <input
            onChange={handleChange}
            type="radio"
            className="form-radio__input"
            id={`radio-${item}`}
            value={item}
            {...otherProps}
          />
          <label htmlFor={`radio-${item}`} className="form-radio__label">
            <span className="form-radio__button"></span>
            {item}
          </label>
          <span className="form-radio__name">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default FormRadio;
