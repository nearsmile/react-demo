import React, { Component } from 'react';

class Comment extends Component {
  constructor (props) {
    super(props);
    const { comment } = this.props;
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.userName}</span>:
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}