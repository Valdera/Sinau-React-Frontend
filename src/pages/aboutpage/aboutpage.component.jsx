import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import { ReactComponent as ProgrammerSvg } from '../../assets/undraw_programmer.svg';
import { ReactComponent as FacebookIcon } from '../../assets/iconmonstr-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/iconmonstr-instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/iconmonstr-twitter.svg';

import './aboutpage.styles.scss';

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="aboutpage--background">
        <div className="aboutpage">
          <div className="aboutpage__svg-box">
            <ProgrammerSvg className="aboutpage__svg" />
          </div>
          <div className="aboutpage__content">
            <h1 className="aboutpage__title">About Us</h1>
            <div className="aboutpage__desc">
              Hanya seorang mahasiswa yang membuat platform tryout online untuk
              UTBK, SIMAK UI, dan UM UGM. Jika ada masalah silahkan email:
              <span> sinau.education.mail@gmail.com</span>
            </div>
            <h3 className="aboutpage__social-title">Our Social Media</h3>
            <div className="aboutpage__social">
              <div className="aboutpage__social-circle">
                <FacebookIcon className="aboutpage__social-facebook" />
              </div>
              <div className="aboutpage__social-circle">
                <InstagramIcon className="aboutpage__social-instagram" />
              </div>
              <div className="aboutpage__social-circle">
                <TwitterIcon className="aboutpage__social-twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
