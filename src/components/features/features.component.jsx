import React from 'react';

import Card from '../../components/card/card.component';

import './features.styles.scss';

function Features() {
  return (
    <div className="features">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary--purple">
          Paket Try Out Ujian
        </h2>
      </div>
      <div className="card-container">
        <Card
          examName="simak ui"
          examType="ui"
          link="simak"
          session={5}
          duration={2}
          totalQuestion={100}
          price={5000}
        />
        <Card
          examName="um ugm"
          link="umugm"
          examType="ugm"
          session={5}
          duration={2}
          totalQuestion={120}
          price={5000}
        />
        <Card
          examName="utbk"
          examType="utbk"
          link="utbk"
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
