import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProTypes from 'prop-types'

class Index extends Component {
  static childContentTypes() {
    themeColor: ProTypes.string
  }
  
  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }
  // getChildContext 这个方法就是设置 context 的过程，
  // 它返回的对象就是 context，所有的子组件都可以访问到这个对象
  // 给组件设置 context，那么 childContextTypes 是必写的
  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <h2>This is Title</h2>
        <Title/>
      </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <h2>这是内容标题</h2>
        <Content/>
      </div>
    )
  }
}

class Title extends Component {
  render () {
    return (
      <h1 style={{ color: this.context.themeColor }}>这是标题</h1>
    )
  }
}

class Content extends Component {
  render () {
    return (
      <div>
        <h2>这是内容区</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)