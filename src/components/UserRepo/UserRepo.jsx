import React from 'react';
import PropTypes from 'prop-types';

const UserRepo = ({ name, html_url }) => (
  <li>
    <p>{name}</p>
    <p>{html_url}</p>
  </li>
);

UserRepo.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired 
};

export default UserRepo;

