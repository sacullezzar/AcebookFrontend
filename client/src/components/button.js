import React, { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <div className='button'>
      <li> <a onClick={this.props.function} type='submit'>{this.props.name}</a></li>
      </div>
    )
  }
}

export default Button
