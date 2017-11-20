import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './comment.css';
class CommentApp extends Component {
  render () {
    return (
      <div className='comment-wrapper'>
        <CommentInput/>
        <CommentList/>
      </div>
    )
  }
}

export default CommentApp
