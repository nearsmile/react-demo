import React, { Component } from 'react';
class LikeButton extends Component {

  static defaultProps = { // 默认
    likedText: '取消',
    unLikedText: '点赞'
  }

  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handle() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  
  render() {
    let stateName = this.state.isLiked ? likedText : unLikedText
    return (
      <button onClick={this.handle.bind(this)}
        onClick={() => console.log('%cclick on like', 'color:#fff;background: red')}>
        {stateName}👍
      </button>
    )
  }
}

export {
  LikeButton
}

