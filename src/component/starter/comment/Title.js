import React, { Component } from 'react'

class Title extends Component {
  componentWillMount() {
    console.log('%ccomponent will mount', 'color: #fff;background:green;')
  }

  componentDidMount() {
    console.log('%ccomponent did mount', 'color: #fff;background:green;')
  }

  componentWillUnmount() {
    console.log('%cComponent will unmount', 'color: #fff;background:green;')
  }
  
  render () {
    return (
      <div>
        React Demo
      </div>
    )
  }
}

export default Title