import React, { Component } from 'react'

class Content extends Component {
  render () {
    return (
      <div className='wrapper' style={{border: '1px dashed #999'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Content