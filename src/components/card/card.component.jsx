import React from 'react';
import { withRouter } from 'react-router-dom';
import ButtonPulsate from '../button-pulsate/button-pulsate.component';

import './card.styles.scss';

function Card({
  examName,
  examType,
  session,
  duration,
  totalQuestion,
  price,
  link
}) {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture-${examType}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span-${examType}`}>
            {examName}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>Waktu {duration} jam</li>
            <li>{session} Sesi ujian</li>
            <li>{totalQuestion} soal</li>
            <li>Pembahasan Lengkap</li>
          </ul>
        </div>
      </div>
      <div
        className={`card__side card__side--back card__side--back-${examType}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">Rp.{price}</p>
          </div>
          <ButtonPulsate link={`/tryout/${link}`}>Ikuti ujian</ButtonPulsate>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Card);
