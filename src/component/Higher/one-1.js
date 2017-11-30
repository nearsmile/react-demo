import WrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Comment {
  render () {
    return <input value={this.props.data} />
  }
}

InputWithUserName = WrapWithLoadData(InputWithUserName, 'username')

export default InputWithUserName

class TextareaWithContent extends Component {
  render () {
    return <textarea value={this.props.data} />
  }
}
// 用一个组件包裹了起来，并且通过给高阶组件传入 name 来达到不同字段的数据加载。充分复用了逻辑代码
// 为了组件之间的代码复用。组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。
// 高阶组件内部的包装组件和被包装组件之间通过 props 传递数据
TextareaWithContent = WrapWithLoadData(TextareaWithContent, 'content')
export default TextareaWithContent