import React, { Component } from 'react';

import './App.css';
import Header from './components/header.js'
import Post from './components/post'


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
   fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({posts:posts}, () => console.log('Pulling from the db..', posts, this.state)));
 }

render() {
    return (
      <div className="App">
        <Header />
        <div className='postsWrapper'>
          {this.state.posts.map ((post, index) => {
            return <Post post={post} key={index}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
