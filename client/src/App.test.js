import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title'
import App from './App';
import Post from './components/post'
import { mount, shallow, render } from 'enzyme';

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

describe('<Title />', () => {
  it('should render corrctly with no props', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot
  })

  it('renders a title', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('.title').text()).toEqual('Acebook')
  });
  //
  // it('renders a post', () => {
  //   const app = await mount(<App />)
  //   const entry = post.find('.postWrapper')
  //   expect(entry.find('.body').text()).toEqual('Hello World!')
  // })


  // it('randers a username on a post', () => {
  //   const postbox = shallow(<Post />)
  //   expect(postbox.find('.username').text()).toEqual('Tom')
  // })
})

describe('<Post />', () => {

  let post

  beforeEach(() => {
    post = mount(<Post post={{"user": "Prash","message": "Hello world!"}} />);
  });

  it('renders a post', () => {
    expect(post.find('.postWrapper').length).toEqual(1);
  });

  it('displays a given name', () => {
    let div = post.find('.postWrapper')
    expect(post.find('.username').text()).toEqual('Prash')
  })
})


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
