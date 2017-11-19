import React, { Component } from 'react';
class LikeButton extends Component {

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
    const likedText = this.props.likedText || '取消'
    const unLikedText = this.props.unLikedText || '点赞'
    const words = this.props.words
    /* words = word 
      ? this.props.words 
      : { likedText: '取消', unLikedText: '点赞' } */
    let stateName = this.state.isLiked ? likedText : unLikedText
    if (words) {
      stateName = this.state.isLiked ? words.likedText : words.unLikedText
    }

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

