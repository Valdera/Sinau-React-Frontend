import React from 'react';
import { Link } from 'react-router-dom';

import './profile-bar.styles.scss';

function ProfileBar() {
  return (
    <Link to="/profile" className="profile">
      <img src={`${__dirname}user-test.png`} alt="" className="profile__img" />
      <span className="profile__name">Profile</span>
    </Link>
  );
}

export default ProfileBar;
