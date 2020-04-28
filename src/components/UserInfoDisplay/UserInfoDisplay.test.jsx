import React from 'react';
import { shallow } from 'enzyme';
import UserInfoDisplay from './UserInfoDisplay';

describe('UserInfoDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserInfoDisplay username='janellemellor'
      followerCount='2'
      followingCount='1'
      profileUrl='https://github.com/janellemellor' />);
    expect(wrapper).toMatchSnapshot();
  });
});

