import React, { Component } from 'react';
import UserInput from '../../components/UserInput/UserInput.jsx';
import UserInfoDisplay from '../../components/UserInfoDisplay/UserInfoDisplay.jsx';
import UserRepos from '../../components/UserRepos/UserRepos.jsx';
import { fetchGithubUser } from '../../services/gitHubApi.js';

export default class GithubViewer extends Component {
    state = {
      username: 'enter username'
    }
    
    handleUsernameChange = ({ target }) => {
      this.setState({ username: target.value });
    };

    handleUsernameSubmit

    render() {
      const { username } = this.state;
      return (
        <>
          <UserInput username={username} onUsernameChange={this.handleUsernameChange} />
        </>
      );
    }
}
