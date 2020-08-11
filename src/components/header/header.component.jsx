import React, { Component } from 'react';
import HeaderContainer from '../header-container/header-container.component';
import Wave from '../wave/wave.component';

import './header.styles.scss';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Wave />
      </div>
    );
  }
}

export default Header;
