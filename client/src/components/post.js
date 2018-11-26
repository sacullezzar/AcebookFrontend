import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
      <div className="username">{this.props.name}
      </div>
    </div>
    )
  }
}

Post.defaultProps = {
  name: "Bob"
}

export default Post
