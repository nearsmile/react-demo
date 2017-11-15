const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}
// 组件父类 Component，所有的组件都可以继承这个父类来构建。
// 它定义的两个方法，一个是我们已经很熟悉的 setState；一个是私有方法 _renderDOM。
// _renderDOM 方法会调用 this.render 来构建 DOM 元素并且监听 onClick 事件
class Component {
  constructor (props = {}) {
    this.props = props
  }

  setState(state) {
    const oldEl = this.el
    this.state = state
    this.el = this._renderDOM()
    if (this.onStateChage) this.onStateChage(oldEl, this.el)
  }

  _renderDOM() {
    this.el = createDOMFromString(this.render())
    if (this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false)
    }
    return this.el
  }
}

// 把组件的 DOM 元素插入页面，并且在 setState 的时候更新页面
const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM())
  component.onStateChage = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl)
    wrapper.removeChild(oldEl)
  }
}

class LikeButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLiked: false
    }
  }

  onClick() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return `
      <button class='like-btn' style="background-color: ${ this.props.bgColor }">
        <span class='like-text'>
          ${ this.state.isLiked ? '取消' : '点赞' }
        </span>
        <span>👍</span>
      </button>
    `
  }
}

mount(new LikeButton({ bgColor: 'red' }), document.getElementById('root'))
