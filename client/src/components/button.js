import React, { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <li> <a href='#' value='#' onClick={this.props.function} type='submit'>{this.props.name}</a></li>
    )
  }
}

export default Button
