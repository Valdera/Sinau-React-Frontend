import React, { Component } from 'react';
import Markdown from '../../utils/Markdown/Markdown.component';
import Answers from '../answers/answers.component';

import './question.styles.scss';

const answers = ['soekarno', 'megawati', 'habibie', 'jokowi'];

export default class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="question__text">
          <div className="question__number">
            <span>21</span>
          </div>
          <Markdown>{`When $a \\ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$
x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}
$$`}</Markdown>
        </div>
        <div className="question__answer--title">Answer:</div>
        <Answers name="answer" label="answer" answers={answers} />
      </div>
    );
  }
}
