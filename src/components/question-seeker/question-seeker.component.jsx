import React from 'react';
import Markdown from '../../utils/Markdown/Markdown.component';
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

function QuestionSeeker({ question, answers, file, ...otherProps }) {
  let imgPreview;
  if (file) {
    imgPreview = (
      <img
        className="question__img"
        src={file}
        alt="not loaded"
        height="200"
        width="200"
      />
    );
  }
  return (
    <div className="question">
      <div className="question__text">
        <div className="question__number">
          <span>21</span>
        </div>

        {file ? <div className="question__img-box">{imgPreview}</div> : null}
        <div>
          <Markdown>{question}</Markdown>
        </div>
      </div>
      <div className="question__answer--title">Answer:</div>
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
              <Markdown>{`${alphabet[id]}. ${answer}`}</Markdown>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default QuestionSeeker;
