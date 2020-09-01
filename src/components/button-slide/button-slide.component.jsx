import React from 'react';
import './button-slide.styles.scss';

function ButtonSlide({ children, ...props }) {
  return (
    <div className="button">
      <button className="btn-slide" {...props}>
        <span>{children}</span>
      </button>
    </div>
  );
}

export default ButtonSlide;
