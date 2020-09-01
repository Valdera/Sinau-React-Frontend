import React from 'react';

import './button-styles.scss';

function ButtonBlock({ children, ...otherProps }) {
  return (
    <button className="button-block" {...otherProps}>
      {children}
    </button>
  );
}

export default ButtonBlock;
