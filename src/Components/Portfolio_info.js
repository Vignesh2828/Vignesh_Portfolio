// ProfileInfo.js
import React from 'react';
import profilePic from '../Assets/profile_pic.jpg'; // Import your profile picture
import './ProfileInfo.css'; // Import a CSS file for styling

function ProfileInfo() {
  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img src={profilePic} alt="Profile Pic" width="200" height="200" />
      </div>
      <div className="profile-details">
        <h1>Your Name</h1>
        <p>Your Profession</p>
        <p>Your Location</p>
        <p>Your Bio or About Me</p>
        {/* Add more information about yourself here */}
      </div>
    </div>
  );
}

export default ProfileInfo;
