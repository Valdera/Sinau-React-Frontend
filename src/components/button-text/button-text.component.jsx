import React from 'react';

import './button-text.styles.scss';

function ButtonText({ children }) {
  return <button className="btn-text">{children} &rarr;</button>;
}

export default ButtonText;
