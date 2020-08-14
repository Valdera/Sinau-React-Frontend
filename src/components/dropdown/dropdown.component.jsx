import React from 'react';
import { Link } from 'react-router-dom';

import './dropdown.styles.scss';

function Dropdown({ dropItem }) {
  return (
    <div className="dropdown">
      {dropItem.map((item) => (
        <Link to="/tryout" className="dropdown__item ">
          {item} &gt;
        </Link>
      ))}
    </div>
  );
}

export default Dropdown;
