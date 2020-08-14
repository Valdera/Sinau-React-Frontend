import React, { Component } from 'react';
import HeaderContainer from '../header-container/header-container.component';
import { ReactComponent as Wave } from '../../assets/wave-1.svg';

import './header.styles.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="wave">
          <Wave className="wave__svg" />
        </div>
      </div>
    );
  }
}

export default Header;
