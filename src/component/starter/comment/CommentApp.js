import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import Title from './Title';
import './comment.css';
class CommentApp extends Component {
  constructor () {
    super();
    this.state = {
      comments: [],
      show: true
    }
    console.log('constructor')
  }
  
  /* componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  } */

  handleTitle () {
    this.setState({
      show: !this.state.show
    })
  }

  handleSubmit (comment) {
    console.log(`comment: `, comment)
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  
  render () {
    return (
      <div className='comment-wrapper'>
        {this.state.show ? <Title/> : null}
        <button onClick={this.handleTitle.bind(this)}>{!this.state.show ? '显示' : '隐藏'}标题</button>
        <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
        <CommentList comments={this.state.comments}/>
        {/* <CommentList/> */}
      </div>
    )
  }
}

export default CommentApp
