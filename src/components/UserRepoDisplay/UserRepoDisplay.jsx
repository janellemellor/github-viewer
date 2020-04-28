import React from 'react';
import PropTypes from 'prop-types';

const UserRepoDisplay = ({ repos }) => (
  <>
    <p>{repos}</p>
  </>
);

UserRepoDisplay.propTypes = {
  repos: PropTypes.string.isRequired 
};

export default UserRepoDisplay;
