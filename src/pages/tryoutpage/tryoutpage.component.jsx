import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import SectionAbout from '../../components/section-about/section-about.component';
import SectionInfo from '../../components/section-info/section-info.component';

import './tryoutpage.styles.scss';

function TryoutPage() {
  return (
    <div>
      <Navbar />
      <div className="tryout">
        <div className="section-tryout">
          <SectionAbout />
          <SectionInfo />
        </div>
      </div>
    </div>
  );
}

export default TryoutPage;
