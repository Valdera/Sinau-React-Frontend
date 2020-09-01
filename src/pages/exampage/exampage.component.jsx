import React from 'react';

import './exampage.styles.scss';
import Question from '../../components/question/question.component';
import Navigation from '../../components/navigation/navigation.component';
import SelectSession from '../../components/select-session/select-session.component';
import Timer from '../../components/timer/timer.component';
import ButtonBlock from '../../components/button-block/button-block.component';

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
    <div className="exampage__background">
      <Navigation />
      <div className="exampage__box">
        <div className="exampage">
          <div className="exampage__question">
            <Question />
          </div>
          <div className="exampage__info">
            <div className="info__timer">
              <Timer />
            </div>
            <div className="info__question">
              {num.map((number) => (
                <div key={`number-${number}`} className="info__number">
                  <span>{number}</span>
                </div>
              ))}
            </div>
            <div className="info__session">
              <SelectSession />
            </div>
            <div className="info__button">
              <ButtonBlock>Submit</ButtonBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
