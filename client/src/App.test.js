import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title'
import App from './App';
import Post from './components/post'
import { mount, shallow, render } from 'enzyme';



it('renders a title', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper.find('.title').text()).toEqual('Acebook')
});

it('renders a post', () => {
  const post = await render(<App />)
  const entry = post.find('.postWrapper')
  expect(entry.find('.body').text()).toEqual('Hello World!')
})

// it('randers a username on a post', () => {
//   const postbox = shallow(<Post />)
//   expect(postbox.find('.username').text()).toEqual('Tom')
// })

// describe('<App />', () => {
//
//   it('calls componentDidMount', () => {
//     jest.fn(Post.prototype, 'componentDidMount');
//     const wrapper = shallow(<Post />);
//     expect(Post.prototype.componentDidMount.mock.calls.length).toBe(1);
//   });
// });

// it('recieves post data', () => {
//    const wrapper = shallow(<Post/>);
//    wrapper.instance().componentDidMount = jest.fn();
//    wrapper.update();
//    wrapper.instance().constructor({name: 'Tom', body: 'Hello'});
//    expect(wrapper.find('.body').text()).ToEqual('Hello')
// })
