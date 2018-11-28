import React, { Component } from 'react';

import './App.css';
import Header from './components/header.js'
import Post from './components/post'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/dummyJson.json')
    .then(response => response.json())
    .then(data => this.setState({posts: data}))
  }

  render() {

    return (
      <div className="App">
        <Header />
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
