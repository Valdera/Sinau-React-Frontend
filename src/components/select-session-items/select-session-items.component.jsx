import React from 'react';

import './select-session-items.styles.scss';

function SelectSessionItems({ items, handleState }) {
  return (
    <div className="select-session-box__container">
      {items.map((item) => {
        return (
          <div
            key={item}
            onClick={(e) => handleState(e, item)}
            className="select-session-box__item">
            <span className="select-session-box__item--title">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SelectSessionItems;
