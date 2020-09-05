import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import { ReactComponent as ProfileSvg } from '../../assets/undraw_profile.svg';
import ProfileData from '../../components/profile-data/profile-data.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import ErrorPage from '../errorpage/errorpage.component';

import './profilepage.styles.scss';

function ProfilePage({ currentUser }) {
  return (
    <div>
      {currentUser ? (
        <div>
          <Navbar />
          <div className="profilepage--background">
            <div className="profilepage">
              <div className="profilepage__info">
                <div className="profilepage__info-svg-box">
                  <ProfileSvg className="profilepage__info-svg" />
                </div>
                <ProfileData />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage>Please Login First</ErrorPage>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ProfilePage);
