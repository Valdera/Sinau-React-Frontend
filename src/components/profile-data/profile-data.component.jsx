import React from 'react';
import ProfileDataItems from '../profile-data-items/profile-data-items.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import './profile-data.styles.scss';

function ProfileData({ user }) {
  return (
    <div className="profiledata">
      <h1 className="profiledata-title">Profile Data</h1>
      <form className="profiledata-content">
        <ProfileDataItems
          type="text"
          data="name"
          label="Nama"
          value={user.name}
        />
        <ProfileDataItems
          type="select"
          data="kelas"
          label="kelas"
          value={user.kelas}
          values={[10, 11, 12]}
        />
        <ProfileDataItems
          type="select"
          data="majors"
          label="Jurusan"
          value={user.majors}
          values={['ipa', 'ips']}
        />
      </form>
      {user.role === 'admin' ? <Link to="/admin">ADMIN</Link> : ''}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

export default connect(mapStateToProps)(ProfileData);
