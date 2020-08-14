import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-menu.styles.scss';

function NavbarMenu({ children, text, handleClick }) {
  return (
    <div className="navbar__menu">
      <Link onClick={handleClick} className="navbar__menu-text">
        {text}
      </Link>
      {children}
    </div>
  );
}

export default NavbarMenu;
