import React from 'react';
import { ReactComponent as Wave } from '../../assets/wave-4.svg';
import { ReactComponent as TaskSVG } from '../../assets/undraw_task.svg';
import './tryoutpage.styles.scss';

function TryoutPage() {
  return (
    <div className="tryout">
      <div className="section-about">
        <div className="section-about__header">
          <div className="section-about__title">
            <p className="section-about__title--main">TRY OUT SIMAK UI</p>
            <span className="section-about__title--sub">By Sinau Edu Team</span>
          </div>
        </div>
        <Wave className="section-about__svg" />
        <div className="section-about__text-box">
          <h2 className="heading-secondary heading-secondary--purple section-about__heading">
            Deskripsi Soal
          </h2>
        </div>
      </div>
      <div className="section-info">
        <div className="section-info__img">
          <TaskSVG className="section-info__img--svg" />
        </div>
      </div>
    </div>
  );
}

export default TryoutPage;
