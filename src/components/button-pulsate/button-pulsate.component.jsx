import React from 'react';
import { Link } from 'react-router-dom';

import './button-pulsate.styles.scss';

function ButtonPulsate({ children }) {
  return <Link className="btn-puls">{children}</Link>;
}

export default ButtonPulsate;
