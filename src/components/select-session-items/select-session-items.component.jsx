import React from 'react';

import './select-session-items.styles.scss';

function SelectSessionItems({ items, handleState }) {
  return (
    <div className="select-box__container">
      {items.map((item) => {
        return (
          <div className="select-box__item">
            <span className="select-box__item--title">{item.examName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SelectSessionItems;
