import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title'
import App from './App';
import { shallow, render } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper.find('.title').text()).toEqual('Acebook')
});
