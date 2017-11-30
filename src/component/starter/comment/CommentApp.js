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
  
  componentWillMount() {
    this._loadComments()
    console.log('CommentApp will mount')
  }

  componentDidMount() {
    console.log('CommentApp did mount')
  }

  _loadComments() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleTitle () {
    this.setState({
      show: !this.state.show
    })
  }

  handleDeleteComment(index) {
    // console.log(`%c${index}`, 'color: green')
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  handleSubmit (comment) {
    // console.log(`comment: `, comment)
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }

  render () {
    return (
      <div className='comment-wrapper'>
        {this.state.show ? <Title/> : null}
        <button onClick={this.handleTitle.bind(this)}>{!this.state.show ? '显示' : '隐藏'}标题</button>
        <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
        {/* <CommentList/> */}
      </div>
    )
  }
}

export default CommentApp
