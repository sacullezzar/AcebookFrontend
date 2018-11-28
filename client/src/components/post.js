import React, { Component } from 'react';
import './post.css'

class Post extends Component {

  render() {
    return (
      <div className='postWrapper' id={this.props.post._id}>
        <button >Delete</button>
        <div className="username">{this.props.post.user}</div>
        <div className="body">{this.props.post.message}</div>
        <div className="date">{this.props.post.date}</div>
      </div>
    )
  }
}

export default Post
