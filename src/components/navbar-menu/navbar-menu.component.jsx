import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-menu.styles.scss';

function NavbarMenu({ children, text, handleClick, ...otherProps }) {
  return (
    <div className="navbar__menu">
      <Link onClick={handleClick} className="navbar__menu-text" {...otherProps}>
        {text}
      </Link>
      {children}
    </div>
  );
}

export default NavbarMenu;
