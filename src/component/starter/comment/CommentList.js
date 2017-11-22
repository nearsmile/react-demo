import React, { Component } from 'react';
import {Comment} from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
  /* static defaultProps = {
    comments: [{userName: "3242", content: "234"}]
  } */
  constructor (props) {
    super(props);
    this.state = {
      comments: [{userName: "3242", content: "234"}]
    }

  }

  render () {
    return (
      <div>
        {/* { this.props.comments && this.state.comments.map((comment, i) => (<Comment comment={comment} key={i}/>))} */}
        {this.props.comments.map((comment, i) => {
          return (
            <div className='comment' key={i}>
              <div className='comment-user'>
                <span>{comment.userName}</span>:
              </div>
              <p>{comment.content}</p>
            </div>
          )
        }
        )}
      </div>
    )
  }

  /* PropTypes = {
    comments: PropTypes.array.isRequired
  } */
}

CommentList.defaultProps = {
  comments: [{userName: "3242", content: "234"}]
}
  

export default CommentList