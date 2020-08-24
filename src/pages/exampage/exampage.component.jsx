import React from 'react';
import Navigation from '../../components/navigation/navigation.component';
import SelectSession from '../../components/select-session/select-session.component';
import Markdown from '../../utils/Markdown/Markdown.component';

import './exampage.styles.scss';

function ExamPage() {
  return (
    <div>
      <Navigation />
      <div className="exampage">
        <div className="exampage__question">
          <div className="question">
            <div className="question__text">
              <Markdown>{`When $a \\ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are
$$
x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}
$$`}</Markdown>
            </div>
          </div>
        </div>
        <div className="exampage__info">
          <div className="info__question"></div>
          <div className="info__session">
            <SelectSession />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
