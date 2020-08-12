import React from 'react';

import Card from '../../components/card/card.component';

import './features.styles.scss';

function Features() {
  return (
    <div className="features">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Paket Try Out Ujian</h2>
      </div>
      <div className="card-container">
        <Card
          examName="simak ui"
          examType="ui"
          session={5}
          duration={2}
          totalQuestion={100}
          price={5000}
        />
        <Card
          examName="um ugm"
          examType="ugm"
          session={5}
          duration={2}
          totalQuestion={120}
          price={5000}
        />
        <Card
          examName="utbk"
          examType="utbk"
          session={7}
          duration={1.2}
          totalQuestion={120}
          price={5000}
        />
      </div>
    </div>
  );
}

export default Features;
