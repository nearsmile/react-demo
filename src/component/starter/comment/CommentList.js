import React, { Component } from 'react';
import {Comment} from './Comment';
class CommentList extends Component {
  /* static defaultProps () {
    comments: []
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
}

export default CommentList