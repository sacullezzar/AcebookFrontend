import React, { Component } from 'react'
import Title from './title'
import Button from './button'

class Header extends Component {

  chickenDipper() {
    alert('Chicken dipppperrrrr!')
  }

  sirSpamalot() {
    alert('SpamSpamSpamSpamSpamSpam')
  }
  render() {
    return(
      <header className="App-header">
        <Title />
        <div className='buttonContainer'>
          <ul className='buttonList'>
          <Button href='#' className='button'  function={this.chickenDipper} name='Log In' />
          <Button href='#' className='button' function={this.sirSpamalot} name='New Account' />
          <Button href='#' className='button'  name='New Post' />
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
