import React from 'react';

import './story-card.styles.scss';

function StoryCard({ title, children, number }) {
  return (
    <div className={`story-card story-card-${number}`}>
      <span className="story-card__number">
        {number}. {title}
      </span>
      <div className="story-card__desc">
        <span className="story-card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </span>
        {children}
      </div>
    </div>
  );
}

export default StoryCard;
