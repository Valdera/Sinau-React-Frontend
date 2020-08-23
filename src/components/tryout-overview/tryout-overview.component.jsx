import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import SectionAboutContainer from '../../components/section-about/section-about.container';
import SectionInfo from '../../components/section-info/section-info.component';

import './tryout-overview.styles.scss';

function TryoutOverview() {
  return (
    <div>
      <Navbar />
      <div className="tryout">
        <div className="section-tryout">
          <SectionAboutContainer />
          <SectionInfo />
        </div>
      </div>
    </div>
  );
}

export default TryoutOverview;
