import React from 'react';
import './toggle-tab.styles.scss';
import { connect } from 'react-redux';
import { selectCurrentPaket } from '../../redux/location/location.selector';
import { createStructuredSelector } from 'reselect';

function ToggleTab({ exam }) {
  return (
    <div className="tabbed">
      <div className="tabbed__container">
        <input
          type="radio"
          name="tabs"
          id="tab_1"
          className="tabs__input"
          defaultChecked
        />
        <label htmlFor="tab_1" className="tabs__label tabs__label--1">
          INFO
        </label>
        <div className="tabs__content tabs__content--1 tabs__description">
          <div className="tabs__description--title">
            <h1>DESCRIPTION</h1>
          </div>
          <div className="tabs__description--flex">
            <div className="tabs__description--list">
              {exam ? (
                <ul>
                  <li>
                    Harga: <span>Rp.{exam.price}</span>
                  </li>
                  <li>
                    Total Sesi: <span>{sessionStorage.length} sesi</span>
                  </li>
                  <li>
                    Jumlah Soal: <span>{exam.questions.length} soal</span>
                  </li>
                  <li>
                    Waktu: <span>{exam.duration} menit</span>
                  </li>
                  <li>
                    Tahun: <span>{exam.year}</span>
                  </li>
                  <li>
                    Jurusan: <span>{exam.major.toUpperCase()}</span>
                  </li>
                </ul>
              ) : (
                ''
              )}
            </div>
            <div className="tabs__description--text">
              Simak-UI (Seleksi Masuk UI) adalah ujian seleksi terpadu masuk UI
              yang diselenggarakan UI bagi calon mahasiswa yang ingin kuliah di
              UI.
            </div>
          </div>
        </div>
      </div>

      <div className="tabbed__container">
        <input type="radio" name="tabs" id="tab_2" className="tabs__input" />
        <label htmlFor="tab_2" className="tabs__label tabs__label--2">
          RANKING
        </label>
        <div className="tabs__content tabs__content--2 tabs__ranking">
          <div className="tabs__ranking--title">
            <h1>TOP 5</h1>
          </div>
          <ul>
            <li style={{ marginLeft: 0 }}>
              <div>1</div>
              <span>Fauzan Valdera</span>
              <p>650</p>
            </li>
            <li style={{ marginLeft: '2rem' }}>
              <div>2</div>
              <span>Fauzan Valdera</span>
              <p>650</p>
            </li>
            <li style={{ marginLeft: '4rem' }}>
              <div>3</div>
              <span>Fauzan Valdera</span>
              <p>650</p>
            </li>
            <li style={{ marginLeft: '6rem' }}>
              <div>4</div>
              <span>Fauzan Valdera</span>
              <p>650</p>
            </li>
            <li style={{ marginLeft: '8rem' }}>
              <div>5</div>
              <span>Fauzan Valdera</span>
              <p>640</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="tabbed__container">
        <input type="radio" name="tabs" id="tab_3" className="tabs__input" />
        <label htmlFor="tab_3" className="tabs__label tabs__label--3">
          MORE
        </label>
        <div className="tabs__content tabs__content--3">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  exam: selectCurrentPaket
});

export default connect(mapStateToProps)(ToggleTab);
