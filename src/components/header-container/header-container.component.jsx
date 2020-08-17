import React from 'react';
import ButtonSlide from '../button-slide/button-slide.component';
import { ReactComponent as LearningSvg } from '../../assets/undraw_online_test.svg';

import './header-container.styles.scss';

function HeaderContainer() {
  return (
    <div className="header">
      <div className="header__decoration">&nbsp;</div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Sinau Edu</span>
          <span className="heading-primary--sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </span>
        </h1>
        <div className="header__button">
          <ButtonSlide>Try out</ButtonSlide>
        </div>
      </div>
      <div className="header__svg-box">
        <LearningSvg className="header__svg" />
      </div>
    </div>
  );
}

export default HeaderContainer;
