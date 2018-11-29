import React, { Component } from 'react';
import './NewPost.css'
import Button from './button'
class NewPost extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      message: '',
      formSubmitted: false,
      isHidden:true
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
    var url = 'http://localhost:5000/api/posts';
    var post = {title: "nil", user: this.state.username, message: this.state.message}
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
    .then(window.location.reload())
    .catch(error => console.error("Error:", error));

  }



  render() {
    var divStyle = {
      display:'block'
    }
    return (
      <div style={divStyle} className="NewPost" >
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
