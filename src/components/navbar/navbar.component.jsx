import React, { Component } from 'react';
import ProfileBar from '../profile-bar/profile-bar.component';
import NavbarMenu from '../navbar-menu/navbar-menu.component';
import { ReactComponent as HelpIcon } from '../../assets/icon-help.svg';
import { ReactComponent as BookIcon } from '../../assets/icon-book.svg';
import { ReactComponent as UnivIcon } from '../../assets/icon-univ.svg';
import { ReactComponent as AboutIcon } from '../../assets/icon-about.svg';
import { ReactComponent as HomeIcon } from '../../assets/icon-home.svg';
import './navbar.styles.scss';
import Dropdown from '../dropdown/dropdown.component';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.changeHidden = this.changeHidden.bind(this);
  }

  changeHidden(event) {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const itemsTryOut = ['SIMAK UI', 'UM UGM', 'UTBK'];
    return (
      <div className="navbar">
        <ProfileBar />
        <NavbarMenu text="Home">
          <HomeIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="Try Out" handleClick={this.changeHidden}>
          <BookIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="Tips">
          <UnivIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="Help">
          <HelpIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="About Us">
          <AboutIcon className="navbar__menu-icon" />
        </NavbarMenu>
        {this.state.hidden ? null : <Dropdown dropItem={itemsTryOut} />}
      </div>
    );
  }
}
export default Navbar;
