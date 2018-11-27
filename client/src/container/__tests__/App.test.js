import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe("App", function(){
  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a NewPost newpost', () => {
    let mountedApp = shallow(<App />);
    const newpost = mountedApp.find('NewPost');
    expect(newpost.length).toBe(1)
  });
});
// it('renders a title', () => {
//   const wrapper = shallow(<Title />);
//   expect(wrapper.find('.title').text()).toEqual('Acebook')
// });

// it('randers a username on a post', () => {
//   const postbox = shallow(<Post />)
//   expect(postbox.find('.username').text()).toEqual('Tom')
// })
