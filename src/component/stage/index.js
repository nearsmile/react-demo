import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import AutoFocusInput from './AutoFocusInput';
import Content from './Content';
import SetHtml from './SetHtml';

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
        <Content>
          {this.state.show ? <Clock/> : null}
          <button onClick={this.handleClock.bind(this)}>
            {this.state.show ? '隐藏' : '显示'}时钟
          </button>
          {this.state.show ? <AutoFocusInput/> : null}
          <SetHtml/>
        </Content>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)