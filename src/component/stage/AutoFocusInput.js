import React, { Component } from 'react';

class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }
  
  render () {
    return (
      <div>
        <input ref={(input) => this.input = input} type="text"/>
      </div>
    )
  }
}

export default AutoFocusInput