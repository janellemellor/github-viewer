import React from 'react';
import PropTypes from 'prop-types';
import UserRepo from '../UserRepo/UserRepo.jsx';

const UserRepos = ({ repos }) => {
  const allRepos = repos.map(repo => <UserRepo key ={repo.id} {...repo} />);
  return (
    <ul>
      {allRepos}
    </ul>
  );
};

UserRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, 
    html_url: PropTypes.string.isRequired   
  })).isRequired
};

export default UserRepos;
