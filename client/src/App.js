import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Post from './components/post'
import NewPost from './components/NewPost'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [],
      newposthidden:true
    }
    this.toggleNewPost = this.toggleNewPost.bind(this);
  }

  apiValid() {
    return true
  }

componentDidMount(){
  fetch('http://localhost:5000/api/posts')
    .then(res => res.json())

    .then(posts => this.setState({posts:posts}));
}

toggleNewPost() {
  console.log("toggle?")
  this.setState({newposthidden:!this.state.newposthidden})
}

  render() {
    return (
      <div className="App">
        <Header toggleNewPost={this.toggleNewPost} />
        {!this.state.newposthidden && <NewPost />}
        <div className='postsWrapper'>
          {this.state.posts.map ((post, index) => {
            return <div className='post'> <Post post={post} key={index}/> </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
