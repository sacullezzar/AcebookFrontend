import React, { Component } from 'react';

import './App.css';
import Header from './components/header.js'
import Post from './components/post'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Post />
      </div>
    );
  }
}

export default App;
