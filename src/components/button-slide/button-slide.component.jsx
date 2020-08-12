import React from 'react';
import './button-slide.styles.scss';

function ButtonSlide({ children, ...props }) {
  return (
    <div className="button">
      <button class="btn-slide">
        <span>{children}</span>
      </button>
    </div>
  );
}

export default ButtonSlide;
