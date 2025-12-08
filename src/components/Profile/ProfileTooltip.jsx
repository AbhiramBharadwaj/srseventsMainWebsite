import React from 'react';
import './ProfileTooltip.css'; // This will contain your custom CSS

const ProfileTooltip = () => {
  return (
    <div className="profile-tooltip">
      <div className="profile-header">
        <img src="../assets/profile.png" alt="Profile" className="profile-image"/>
        <strong>@abhiram_bharadwaj</strong>
      </div>
      <div className="profile-body">
        <p> Software Engineer </p>
        <p>Joined October 2023</p>
      </div>
    </div>
  );
};

export default ProfileTooltip;
