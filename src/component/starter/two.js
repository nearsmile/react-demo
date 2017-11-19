import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  handleClick (e) {
    console.log('Click on title.', e, this)
  }
  
  render () {
    return (
      <h1 onClick={ this.handleClick.bind(this) }>
        React Demo
      </h1>
    )
  }
}

class LikeButton extends Component {
  constructor () {
    super()
    this.state = {
      isLiked: false,
      count: 0
    }
  }

  handleClick () {
    console.log('before:', this.state.isLiked) // before 和 after 结果一样
    this.setState(preState => {
      return {
        isLiked: !this.state.isLiked
      }
    })
    this.setState(preState => {
      return {
        count: ++preState.count
      }
    })
    /* this.setState(preState => {
      return {
        count: preState.count + 2
      }
    }) */
    console.log('after:', this.state.isLiked)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.isLiked ? '取消' : '点赞'} 👍 {this.state.count}
        </button>
        <p></p>
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <Title/>
        <LikeButton/>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
