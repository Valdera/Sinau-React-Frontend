import React from 'react';

import './answers.styles.scss';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

function Answers({ answers, ...otherProps }) {
  return (
    <form className="question__answers">
      {answers.map((answer, id) => (
        <div key={`answer-${id}`} className="question__answer">
          <input
            type="radio"
            className="question__input"
            id={`question-${id}`}
            value={answer}
            {...otherProps}
          />
          <label className="question__label" htmlFor={`question-${id}`}>
            <span className="question__button"></span>
            <span className="question__text-label">
              {alphabet[id]}. {answer}
            </span>
          </label>
        </div>
      ))}
    </form>
  );
}

export default Answers;
