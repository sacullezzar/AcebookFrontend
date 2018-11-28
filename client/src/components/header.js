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
            <Button href='#' className='button'  name='New Post' />
            <Button href='#' className='button' name='Log In' />
            <Button href='#' className='button' name='Register' />
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
