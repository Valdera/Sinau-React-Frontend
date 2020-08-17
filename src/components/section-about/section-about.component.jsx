import React from 'react';
import ToggleTab from '../../components/toggle-tab/toggle-tab.component';

import './section-about.styles.scss';

function SectionAbout() {
  return (
    <div className="section-about__desc">
      <div className="section-about__text">
        <div className="section-about__text--main">
          <h1>TRY OUT SIMAK UI</h1>
        </div>
        <div className="section-about__text--sub">
          <p>By Sinau Edu Team</p>
        </div>
      </div>
      <div className="section-about__tabs">
        <ToggleTab />
      </div>
    </div>
  );
}

export default SectionAbout;
