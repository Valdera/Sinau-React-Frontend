import React from 'react';
import ProfileDataItems from '../profile-data-items/profile-data-items.component';

import './profile-data.styles.scss';

function ProfileData() {
  return (
    <div className="profiledata">
      <h1 className="profiledata-title">Profile Data</h1>
      <form className="profiledata-content">
        <ProfileDataItems
          type="text"
          data="name"
          label="Name"
          value={'Fauzan Valdera'}
        />
        <ProfileDataItems
          type="select"
          data="kelas"
          label="kelas"
          value={12}
          values={[10, 11, 12]}
        />
      </form>
    </div>
  );
}
export default ProfileData;
