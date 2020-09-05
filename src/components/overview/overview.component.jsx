import React from 'react';
import { ReactComponent as AnalyticSvg } from '../../assets/undraw_analytics.svg';
import { ReactComponent as PaperIcon } from '../../assets/icon-paper.svg';
import ButtonGhost from '../button-ghost/button-ghost.component';

import './overview.styles.scss';

function Overview() {
  return (
    <div className="overview">
      <div className="overview__info">
        <div className="overview__svg-box">
          <AnalyticSvg className="overview__svg" />
        </div>
      </div>
      <div className="overview__data">
        <div className="overview__box">
          <h2 className="overview__box-title">Last Tryout</h2>
          <div className="overview__list">
            <div className="overview__list-item">
              <div className="overview__list-item--top">
                <div className="overview__list-item-icon-box">
                  <PaperIcon className="overview__list-item-icon" />
                </div>
                <span>UM UGM 2019 IPA</span>
              </div>
              <div className="overview__list-item--bottom">
                <span>Score : </span>
                <div className="overview__list-item-score">640</div>

                <span>Correct Answer : </span>
                <div className="overview__list-item-score">23 / 139</div>
                <div className="overview__list-item-button">
                  <ButtonGhost>Analyze</ButtonGhost>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
