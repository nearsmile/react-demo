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

// 在 Connect 组件的 constructor 里面初始化了 state.allProps，它是一个对象，用来保存需要传给被包装组件的所有的参数。
// 生命周期 componentWillMount 会调用调用 _updateProps 进行初始化，然后通过 store.subscribe 监听数据变化重新调用 _updateProps
export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = { allProps: {} }
    }

    componentWillMount () {
      const { store } = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      const { store } = this.context
      // 额外传入 props，让获取数据更加灵活方便
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {} // 防止 mapDispatchToProps 没有传入
      this.setState({
        allProps: { // 整合普通的 props 和从 state 生成的 props
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render () {
      // const { store } = this.context
      // let stateProps = mapStateToProps(store.getState())
      // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
      // return <WrapperComponent {...stateProps}/>
      return <WrapperComponent {...this.state.allProps}/>
    }
  }
  return Connect
}

// export default connect
