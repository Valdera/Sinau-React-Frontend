import React from 'react';
import { ReactComponent as TaskSVG } from '../../assets/undraw_task.svg';
import SelectBoxContainer from '../select-box/select-box.container';

import './section-info.styles.scss';

function SectionInfo() {
  return (
    <div className="section-info">
      <div className="section-info__img">
        <TaskSVG className="section-info__img--svg" />
      </div>
      <div className="section-info__text--main">
        <span>Pilih Soal</span>
      </div>
      <div className="section-info__text--sub">
        <SelectBoxContainer />
      </div>
    </div>
  );
}

export default SectionInfo;
