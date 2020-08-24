import React from 'react';

import './select-items.styles.scss';

function SelectItems({ items, handleState }) {
  return (
    <div className="select-box__container">
      {items.map((item) => {
        return (
          <div
            className="select-box__item"
            onClick={(e) => handleState(e, item.examName)}>
            <span className="select-box__item--title">{item.examName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SelectItems;
