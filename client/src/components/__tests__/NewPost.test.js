import React from 'react';
import {shallow} from 'enzyme';
import NewPost from '../NewPost';

describe("New Post", function(){
  let mountedNewPost;
  beforeEach(()=>{
    mountedNewPost = shallow(<NewPost />);
  })

  test('renders without crashing', () => {
    let mountedNewPost = shallow(<NewPost />);
  });

  test('Has a text field', () => {
    const textField = mountedNewPost.find('textarea.postfield' )
    expect(textField.length).toBe(1)
  });

  test('Has a text field', () => {
    const usernameField = mountedNewPost.find('input.username-field' )
    expect(usernameField.length).toBe(1)
  });

  test('Has a submit button', ()=>{
    const submitButton = mountedNewPost.find('.postbutton')
    expect(submitButton.length).toBe(1);
  })

  test('should respond to change event and change the state of the Field Value', () => {
    const wrapper = shallow(<NewPost />);
    wrapper.find('.postfield').simulate('change', {target: {value: 'cats'}});
    expect(wrapper.state('message')).toEqual('cats');
  })

  test('should respond to change event and change the state of the Username Field Value', () => {
    const wrapper = shallow(<NewPost />);
    wrapper.find('.username-field').simulate('change', {target: {value: 'a dog'}});
    expect(wrapper.state('username')).toEqual('a dog');
  })

  test('should fail if no credentials are provided', () => {
      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const loginComponent = shallow(<NewPost />);
      expect(loginComponent.find('#messageForm').length).toBe(1);
      loginComponent.find('#messageForm').simulate('submit', fakeEvent);
      expect(loginComponent.state('formSubmitted')).toEqual(true)
  });


})

// describe('update state', () =>{
//   let mountedNewPost;
//   beforeEach(()=>{
//     mountedNewPost = shallow(<NewPost />);
//   })

  // it('calls fetch in #componentDidMount', ()=>{
  //   const fakeEvent = { preventDefault: () => console.log('preventDefault') };
  //   const loginComponent = shallow(<NewPost />);
  //   loginComponent.find('#messageForm').simulate('submit', fakeEvent);
  //   expect(fetch('http://localhost:5000/api/posts/')).toHaveBeenCalled()
  //  });
// 
// })

//    it('calls axios.get with correct url', ()=>{
//        return mountedStoreLocator.instance().componentDidMount().then(()=>{
//            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
//        })
//    });
//
//    it('updates state with api data', () => {
//        return mountedStoreLocator.instance().componentDidMount().then(()=> {
//          expect(mountedStoreLocator.state()).toHaveProperty('shops',
//              [{
//                  "location": "test location",
//                  "address" : "test address"
//              }]
//          );
//        })
//        });
