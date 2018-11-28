import React from 'react';
import {shallow} from 'enzyme';
import NewPost from '../NewPost';

describe("New Post", function(){
  let mountedNewPost;
  beforeEach(()=>{
    mountedNewPost = shallow(<NewPost />);
  })

  it('renders without crashing', () => {
    let mountedNewPost = shallow(<NewPost />);
  });

  it('Has a text field', () => {
    const textField = mountedNewPost.find('textarea.postfield' )
    expect(textField.length).toBe(1)
  });

  it('Has a submit button', ()=>{
    const submitButton =
    mountedNewPost.find('button.postbutton')
    expect(submitButton.length).toBe(1);
  })


    it('should respond to change event and change the state of the Login Component', () => {
     const wrapper = shallow(<NewPost />);
     wrapper.find('.postfield').simulate('change', {target: {value: 'cats'}});
     expect(wrapper.state('message')).toEqual('cats');
    })



})
