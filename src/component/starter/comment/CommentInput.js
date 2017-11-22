import React, { Component } from 'react';

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      content: ''
    }
  }

  componentDidMount () {
    this.textarea.focus()
  }

  handlerUserChange (event) {
    this.setState({
      userName: event.target.value
    })
  }

  handlerContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const { userName, content } = this.state
      this.props.onSubmit({
        userName, 
        content,
        createdTime: new Date()
      })
    }
    this.setState({ content: '' })
  }

  _saveUserName(userName) {
    localStorage.setItem('userName', userName)
  }

  handleBlurUserName(event) {
    this._saveUserName(event.target.value)
  }

  componentDidMount() {
    const userName = localStorage.getItem('userName')
    if (userName) {
      this.setState({
        userName
      })
    }
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input onBlur={this.handleBlurUserName.bind(this)} value={this.state.userName} onChange={this.handlerUserChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea ref={textarea => this.textarea = textarea} value={this.state.content} onChange={this.handlerContentChange.bind(this)}/>
          </div>
        </div>
        <div className='commend-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput