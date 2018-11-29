import React from 'react';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import Post from '../post';
var sinonChai = require('sinon-chai')
var chai = require('chai')
var expect = chai.expect;
chai.use(sinonChai)

describe("New Post", function(){
  it('renders without crashing', () => {
    let mountedPost = shallow(<Post post={{_id:"1", user:"Prash", message:"Hello", date:"1"}}/>);
  });

  it('should call mock function when button is clicked', () => {
    const deletePost = sinon.spy(Post.prototype, 'deletePost')
    const compenent = shallow(<Post post={{_id:"2", user:"Prash", message:"Hello", date:"1"}}/>)
    compenent.find('button.delete').simulate('click')
    expect(deletePost).to.have.been.called
  });
})
