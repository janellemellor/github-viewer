import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput.jsx';

describe('UserInput', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserInput 
      username='janellemellor'
      onUsernameChange={() => {}} 
      onUsernameSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
