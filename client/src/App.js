import React, { Component } from 'react';

import './App.css';
import Header from './components/header.js'
import Post from './components/post'


class App extends Component {

  render() {
    const user = {
      userName: 'Tom',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit atque ullam iure suscipit, voluptate quaerat ab magnam nemo ducimus quisquam!'
    }

    const posts = [user, user, user, user, user]

    return (
      <div className="App">
        <Header />
        <div className='postsWrapper'>
          {posts.map ((user) => {
            return <Post user={user} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
