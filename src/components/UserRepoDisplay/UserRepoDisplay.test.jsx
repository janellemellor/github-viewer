import React from 'react';
import { shallow } from 'enzyme';
import UserRepoDisplay from './UserRepoDisplay.jsx';

describe('UserRepoDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserRepoDisplay repos='https://github.com/janellemellor?tab=repositories' />);
    expect(wrapper).toMatchSnapshot();
  });
});

