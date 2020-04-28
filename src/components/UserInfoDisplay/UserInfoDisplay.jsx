import React from 'react';
import PropTypes from 'prop-types';

const UserInfoDisplay = ({ username, followerCount, followingCount, profileUrl }) => (
  <>
    <p>{username}</p>
    <p>{followerCount}</p>
    <p>{followingCount}</p>
    <p>{profileUrl}</p>
  </>
);

UserInfoDisplay.propTypes = {
  username: PropTypes.string.isRequired,
  followerCount: PropTypes.string.isRequired,
  followingCount: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
};

export default UserInfoDisplay;
