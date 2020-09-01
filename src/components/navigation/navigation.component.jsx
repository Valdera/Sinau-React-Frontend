import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';

function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/about-us" className="navigation__link">
              About Us
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/help" className="navigation__link">
              Help
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/tips" className="navigation__link">
              Tips
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/profile" className="navigation__link">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
