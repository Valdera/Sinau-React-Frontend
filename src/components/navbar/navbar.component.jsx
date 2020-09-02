import React, { Component } from 'react';
import ProfileBar from '../profile-bar/profile-bar.component';
import NavbarMenu from '../navbar-menu/navbar-menu.component';
import { ReactComponent as BookIcon } from '../../assets/icon-book.svg';
import { ReactComponent as UnivIcon } from '../../assets/icon-univ.svg';
import { ReactComponent as AboutIcon } from '../../assets/icon-about.svg';
import { ReactComponent as HomeIcon } from '../../assets/icon-home.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icon-logout.svg';
import './navbar.styles.scss';
import Dropdown from '../dropdown/dropdown.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.changeHidden = this.changeHidden.bind(this);
  }

  changeHidden() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const { dropItems } = this.props;
    return (
      <div className="navbar">
        <ProfileBar />
        <NavbarMenu text="Home" to="/">
          <HomeIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="Try Out" handleClick={this.changeHidden}>
          <BookIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="Tips" to="/tips">
          <UnivIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="Logout" to="/login">
          <LogoutIcon className="navbar__menu-icon" />
        </NavbarMenu>
        <NavbarMenu text="About Us" to="/about-us">
          <AboutIcon className="navbar__menu-icon" />
        </NavbarMenu>
        {this.state.hidden ? null : (
          <Dropdown changeHidden={this.changeHidden} dropItems={dropItems} />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dropItems: selectDirectorySections
});

export default connect(mapStateToProps)(Navbar);
