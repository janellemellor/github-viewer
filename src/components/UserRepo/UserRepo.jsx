import React from 'react';
import PropTypes from 'prop-types';

const UserRepo = ({ repoName, repoUrl }) => (
  <li>
    <p>{repoName}</p>
    <p>{repoUrl}</p>
  </li>
);

UserRepo.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired 
};

export default UserRepo;

