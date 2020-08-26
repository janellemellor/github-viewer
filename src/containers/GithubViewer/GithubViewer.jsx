import React, { Component } from 'react';
import UserInput from '../../components/UserInput/UserInput.jsx';
import UserInfoDisplay from '../../components/UserInfoDisplay/UserInfoDisplay.jsx';
import UserRepos from '../../components/UserRepos/UserRepos.jsx';
import { fetchGithubUser } from '../../services/gitHubApi.js';

export default class GithubViewer extends Component {
    state = {
      username: 'username',
      user: {
        //may need to come back and have these match the api keys here and in display. Double check whether these are actually needed here in state. 
        username:'', 
        followerCount: 0, 
        followingCount: 0, 
        profileUrl: '' 
      } 
      //will likely also need to add in repos as state
    }
    
    handleUsernameChange = ({ target }) => {
      this.setState({ username: target.value });
    };

    //async/await since fetching from an api?
    handleUsernameSubmit = () => {
      fetchGithubUser(this.state.username)
        .then(user => this.setState({ user }));
    }

    render() {
      const { username } = this.state;
      return (
        <>
          <UserInput username={username} onUsernameChange={this.handleUsernameChange} onUsernameSubmit={this.handleUsernameSubmit}/>
        </>
      );
    }
}

