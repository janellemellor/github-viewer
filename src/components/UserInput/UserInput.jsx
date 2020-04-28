import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ username, onUsernameChange }) => (
  <>
    <input type='text' name='username' value={username} onChange={onUsernameChange} />
  </>
);

UserInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired    
};

export default UserInput;
