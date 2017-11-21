import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
class App extends Component {
  constructor () {
    super()
    this.state = {
      show: true
    }
  }
  handleClock () {
    this.setState({
      show: !this.state.show
    })
  }
  
  render () {
    return (
      <div>
        {this.state.show ? <Clock/> : null}
        <button onClick={this.handleClock.bind(this)}>
          {this.state.show ? '隐藏' : '显示'}时钟
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)