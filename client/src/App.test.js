import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title'
import App from './App';
import Post from './components/post'
import { shallow, render } from 'enzyme';


it('renders a title', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper.find('.title').text()).toEqual('Acebook')
});

it('randers a username on a post', () => {
  const postbox = shallow(<Post />)
  expect(postbox.find('.username').text()).toEqual('Tom')
})
