import React from 'react';
import ProfileBar from '../profile-bar/profile-bar.component';
import { Link } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../../assets/icon-help.svg';
import { ReactComponent as BookIcon } from '../../assets/icon-book.svg';
import { ReactComponent as UnivIcon } from '../../assets/icon-univ.svg';
import { ReactComponent as AboutIcon } from '../../assets/icon-about.svg';
import './navbar.styles.scss';

function Navbar() {
  return (
    <div className="navbar">
      <ProfileBar />
      <div className="navbar__menu">
        <Link className="navbar__menu-text">Paket</Link>
        <BookIcon className="navbar__menu-icon" />
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu-text">Tips</Link>
        <UnivIcon className="navbar__menu-icon" />
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu-text">About us</Link>
        <AboutIcon className="navbar__menu-icon" />
      </div>

      <div className="navbar__menu">
        <Link className="navbar__menu-text">Help</Link>
        <HelpIcon className="navbar__menu-icon" />
      </div>
    </div>
  );
}

export default Navbar;
