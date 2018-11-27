import React, { Component } from 'react';
import './NewPost.css'
class NewPost extends Component {

  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      message : event.target.value
    })
  }

  render() {
    return ( <div className="NewPost">
    <form>
    <textarea onChange={this.handleInputChange} name="message" id="message-field" className="postfield" placeholder="Enter your post" rows="6"  cols="50"></textarea>
    <div><button type="submit" className="postbutton">Add Post</button></div>
    </form>
              </div>
    );
  }
}

export default NewPost;
