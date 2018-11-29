import React, { Component } from 'react';

import './App.css';
import Header from './components/header'
import Post from './components/post'
import NewPost from './components/NewPost'

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    posts: []
  }
}

componentDidMount(){
  fetch('http://localhost:5000/api/posts')
    .then(res => res.json())
    .then(posts => this.setState({posts:posts}));
}


render() {
    return (
      <div className="App">
        <Header />
        <NewPost />
        <div className='postsWrapper'>
          {this.state.posts.map ((post, index) => {
            return <Post post={post} key={index}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
