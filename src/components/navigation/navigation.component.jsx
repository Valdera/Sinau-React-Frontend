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

      <label for="navi-toggle" className="navigation__button">
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
            <a href="#" className="navigation__link">
              About Us
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Help
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Tips
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Tryout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
