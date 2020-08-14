import React from 'react';
import { ReactComponent as WaveTop } from '../../assets/wave-2.svg';
import { ReactComponent as WaveBot } from '../../assets/wave-3.svg';
import StoryCard from '../story-card/story-card.component';
import { ReactComponent as StudyingSVG } from '../../assets/undraw_studying.svg';
import { ReactComponent as ExamsSVG } from '../../assets/undraw_exams.svg';
import { ReactComponent as DestinationsSVG } from '../../assets/undraw_lost.svg';

import './story.styles.scss';

function Story() {
  return (
    <div>
      <WaveTop />
      <div className="u-center-text story-title">
        <h2 className="heading-secondary heading-secondary--pink">
          TIPS MENGHADAPI UJIAN
        </h2>
      </div>
      <div className="story-container">
        <StoryCard number={1} title="Konsisten">
          <StudyingSVG className="story-card__svg" />
        </StoryCard>
        <StoryCard number={2} title="Try Out">
          <ExamsSVG className="story-card__svg" />
        </StoryCard>
        <StoryCard number={3} title="Destinasi">
          <DestinationsSVG className="story-card__svg" />
        </StoryCard>
      </div>
      <WaveBot />
    </div>
  );
}

export default Story;
