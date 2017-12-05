import React, { Component } from 'react'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
    themeName: state.themeName,
    fullName: `${state.firstName} ${state.lastName}`
  }
}

// connect 函数接受一个组件 WrappedComponent 作为参数，把这个组件包含在一个新的组件 Connect 里面，
// Connect 会去 context 里面取出 store。现在要把 store 里面的数据取出来通过 props 传给 WrappedComponent。
const connect = (mapStateToProps) => (WrapperComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    render () {
      const { store } = this.context
      let stateProps = mapStateToProps(store.getState())
      // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
      return <WrapperComponent {...stateProps}/>
    }
  }
  return Connect
}

export default connect
