import React from 'react';

import './exampage.styles.scss';
import Question from '../../components/question/question.component';
import Navigation from '../../components/navigation/navigation.component';
import SelectSession from '../../components/select-session/select-session.component';

const num = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

function ExamPage() {
  return (
    <div>
      <Navigation />
      <div className="exampage">
        <div className="exampage__question">
          <Question />
        </div>
        <div className="exampage__info">
          <div className="info__question">
            {num.map((number) => (
              <div className="info__number">
                <span>{number}</span>
              </div>
            ))}
          </div>
          <div className="info__session">
            <SelectSession />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
