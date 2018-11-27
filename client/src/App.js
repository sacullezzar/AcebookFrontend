import React, { Component } from 'react';

import './App.css';
import Title from './components/title'
import Post from './components/post'
import Button from './components/button'

class App extends Component {

  chickenDipper() {
    alert('Chicken dipppperrrrr!')
  }

  sirSpamalot() {
    alert('SpamSpamSpamSpamSpamSpam')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Button function={this.chickenDipper} name='Log In' />
          <Button function={this.sirSpamalot} name='Register' />
          <Button name='New Post' />
        </header>
        <Post />
      </div>
    );
  }
}

export default App;
