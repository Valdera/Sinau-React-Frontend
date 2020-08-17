import React from 'react';
import { ReactComponent as TaskSVG } from '../../assets/undraw_task.svg';
import ButtonSlide from '../../components/button-slide/button-slide.component';

import './section-info.styles.scss';

function SectionInfo() {
  return (
    <div className="section-info">
      <div className="section-info__img">
        <TaskSVG className="section-info__img--svg" />
      </div>
      <div className="section-info__text--main">
        <span>ONLY</span>
      </div>
      <div className="section-info__text--sub">
        <span>Rp.5000</span>
      </div>
      <div className="section-info__button">
        <ButtonSlide>Mulai</ButtonSlide>
      </div>
    </div>
  );
}

export default SectionInfo;
