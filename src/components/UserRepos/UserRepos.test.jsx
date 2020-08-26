import React from 'react';
import { shallow } from 'enzyme';
import UserRepos from './UserRepos.jsx';

describe('UserRepos', () => {
  it('matches a snapshot', () => {
    const repos = [
      {
        id: 1, 
        name: 'backend',
        html_url: 'https://github.com/mental-health-twitterbot/backend'
      },
      {
        id: 2, 
        name: 'mongo-aggregation',
        html_url: 'https://github.com/janellemellor/mongo-aggregation'
      }
    ];    
    const wrapper = shallow(<UserRepos repos={repos} />);
    expect(wrapper).toMatchSnapshot();
  });
});

