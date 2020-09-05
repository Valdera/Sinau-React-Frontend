import React from 'react';
import './button-ghost.styles.scss';

function ButtonGhost({ children, ...otherProps }) {
  return (
    <div className="button-ghost" {...otherProps}>
      {children}
    </div>
  );
}

export default ButtonGhost;
