import React, { Component } from 'react';
import './NewPost.css'
import Button from './button'
class NewPost extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      message: '',
      formSubmitted: false
    }
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }

  handleChangeMessage = (event) => {
    this.setState({
        message : event.target.value
    })
    // console.log(this.state)
  }

  handleChangeUsername = (event) => {
    this.setState({
        username : event.target.value
    })
    // console.log(this.state)
  }

  formHandler(event) {
    // alert(this.state.message)
    var url = 'https://example.com/profile';
    var post = {username: this.state.username, message: this.state.message}
    console.log(post)
    event.preventDefault();

    this.setState({
      formSubmitted: true
    })

    fetch(url, {
      method: 'POST',
      body: JSON.stringify( post ),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error("Error:", error));
  }


//   var url = 'https://example.com/profile';
// var data = {username: 'example'};
//
// fetch(url, {
//  method: 'POST', // or 'PUT'
//  body: JSON.stringify(data), // data can be `string` or {object}!
//  headers:{
//    'Content-Type': 'application/json'
//  }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
  //   fetch('/api/v1/posts', {
  //   method: 'POST',
  //   body: JSON.stringify( post ),
  //   // console.log(post)
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(response => response.json())
  // .then(postlist => {
  //   this.setState({
  //     post: {
  //       username: '',
  //       message: ''
  //     }
  //   }, addPost(postlist));
  // })
  // .catch(error => {
  //   this.setState({
  //     errorStatus: 'Error adding post'
  //   })
  // });


  render() {
    return (
      <div className="NewPost">
        <form id="messageForm" onSubmit={this.formHandler}>
        <input type="text" className="username-field" name="username" onChange={this.handleChangeUsername} placeholder="your name"/>
          <textarea onChange={this.handleChangeMessage} name="message" id="message-field" className="postfield" placeholder="Enter your post" rows="6"  cols="50">
          </textarea>
          <div>
            <button type="submit" id="cb" className="postbutton">Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;

  //     <div className="App-Header">
  //       <div className='buttonContainer'>
  //         <ul className='buttonList'>
  //     <Button onClick="messageForm.submit()" href='#' className='button'  name='Add Post' />
  //         </ul>
  //       </div>
  // </div>
