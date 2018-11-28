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

  let app

  beforeEach(() => {
    app = render(<App />)
  })

  it('pulls data from the database', () => {
    function rendered(app) {
      expect(app.find('.username').text()).toEqual('Mr Test')
      expect(app.find('.body').text()).toEqual('Tester')
    }
    fetch(rendered)
  })
})
