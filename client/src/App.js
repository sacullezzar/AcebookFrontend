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
          <div className='buttonContainer'>
            <Button className='button'  function={this.chickenDipper} name='Log In' />
            <Button className='button' function={this.sirSpamalot} name='New Account' />
            <Button className='button'  name='New Post' />
          </div>
        </header>
        <Post />
      </div>
    );
  }
}

export default App;
