import React from 'react';
import { shallow } from 'enzyme';
import UserRepo from './UserRepo.jsx';

describe('UserRepo', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserRepo repoName='backend' repoUrl='https://github.com/mental-health-twitterbot/backend' />);
    expect(wrapper).toMatchSnapshot();
  });
});

