import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title'
import Post from './components/post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
        </header>
        <Post />
      </div>
    );
  }
}

export default App;
