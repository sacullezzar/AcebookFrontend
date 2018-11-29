import React, { Component } from 'react';
import './post.css'

class Post extends Component {

  async deletePost(id) {
    fetch(`http://localhost:5000/api/posts/${id}`, {
      method: 'DELETE'
    })
    .then(res => res)
    .catch(err => err)
    window.location.reload()
  }

  render() {
    return (
      <div className='postWrapper' id={this.props.post._id}>
        <button className="delete" onClick={this.deletePost.bind(this, this.props.post._id)}>Delete</button>
        <div className="username">{this.props.post.user}</div>
        <div className="body">{this.props.post.message}</div>
        <div className="date">{this.props.post.date}</div>
      </div>
    )
  }
}

export default Post
