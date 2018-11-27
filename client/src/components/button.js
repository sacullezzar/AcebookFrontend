import React, { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <div className='buttonContainer'>
      <div className='button'>
      <button onClick={this.props.function} type='submit'>{this.props.name}</button>
      </div>
      </div>
    )
  }
}

export default Button
