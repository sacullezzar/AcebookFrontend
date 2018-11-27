import React, { Component } from 'react';

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
    <textarea onChange={this.handleInputChange} name="message" id="message-field" className="postfield" >         Enter your post</textarea>
    <div><button type="submit" className="postbutton">Add Post</button></div>
    </form>
              </div>
    );
  }
}

export default NewPost;
