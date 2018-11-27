import React, { Component } from 'react';
import './post.css'



class Post extends Component {
  render() {
    return (
      <div className='postWrapper'>
      <div className="username">{this.props.user.userName}</div>
      <div className="body">{this.props.user.body}</div>
      </div>

    )
  }

}

export default Post
