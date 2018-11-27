import React, { Component } from 'react';
import './post.css'



class Post extends Component {

  render() {
    return (
      <div className='postWrapper'>
      <div className="username">{this.props.post.user}</div>
      <div className="body">{this.props.post.message}</div>
      </div>

    )
  }

}

export default Post
