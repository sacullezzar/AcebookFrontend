import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon'
import Title from './components/title'
import App from './App';
import Post from './components/post'
import { mount, shallow, render } from 'enzyme';

var sinonChai = require('sinon-chai')
var chai = require('chai')
var chaiExpect = chai.expect
chai.use(sinonChai)

describe("App", function(){
  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a NewPost newpost', () => {
    let mountedApp = shallow(<App />);
    // const newpost = mountedApp.find('NewPost');
    const instance = mountedApp.instance();
    instance.toggleNewPost()
    expect(mountedApp.state('newposthidden')).toBe(false)
  });

  it('toggles new post display', () =>{

  })
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

})

describe('<Post />', () => {
  let post

  beforeEach(() => {
    post = mount(<Post post={{"user": "Prash","message": "Hello world!"}} />);
  });

  it('renders a post', () => {
    expect(post.find('.postWrapper').length).toEqual(1);
  });

  it('displays a given name and message', () => {
    let div = post.find('.postWrapper')
    expect(post.find('.username').text()).toEqual('Prash')
    expect(post.find('.body').text()).toEqual('Hello world!')
  })
})

describe('backend integration', () => {

  it('Component fetches data from API', async (done) => {
      const viewPost = sinon.spy(App.prototype, 'apiValid')
      const app = mount(<App />)
      chaiExpect(viewPost).to.have.been.called
  })
})
// I am really sad that this test does not work :(
