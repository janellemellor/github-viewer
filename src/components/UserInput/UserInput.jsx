import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ username, onUsernameSubmit, onUsernameChange }) => (
  <form onSubmit={onUsernameSubmit}>
    <input type='text' name='username' value={username} onChange={onUsernameChange} />
    <button>Find Github User!</button>
  </form>
);

UserInput.propTypes = {
  username: PropTypes.string.isRequired,
  onUsernameSubmit: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired    
};

export default UserInput;
