import React, { Component } from 'react';

class SetHtml extends Component {
  constructor () {
    super()
    this.state = {
      content: '<h5>editor html</h5>'
    }
  }
  
  render () {
    return (
      <div className='editor-wrapper' dangerouslySetInnerHTML={{__html: this.state.content}}></div>
    )
  }
}

export default SetHtml
