import React from 'react';
import { withRouter } from 'react-router-dom';

import './dropdown.styles.scss';

function Dropdown({ dropItems, history }) {
  return (
    <div className="dropdown">
      {dropItems.map(({ title, linkUrl }) => (
        <div
          onClick={() => history.push(`/tryout${linkUrl}`)}
          className="dropdown__item ">
          {title} &gt;
        </div>
      ))}
    </div>
  );
}

export default withRouter(Dropdown);
