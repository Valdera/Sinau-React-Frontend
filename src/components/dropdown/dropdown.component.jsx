import React from 'react';
import { withRouter } from 'react-router-dom';

import './dropdown.styles.scss';

function Dropdown({ dropItems, history, changeHidden }) {
  return (
    <div className="dropdown">
      {dropItems.map(({ title, linkUrl }) => (
        <div
          key={`dropitems-${title}`}
          onClick={() => history.push(`/tryout${linkUrl}`)}
          className="dropdown__item ">
          {title} &gt;
        </div>
      ))}
    </div>
  );
}

export default withRouter(Dropdown);
