// import { createDOMFromString } from "./two";

const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}

// 主题：优化 DOM 操作
// 解决方案：一旦状态发生改变，就重新调用 render 方法，构建一个新的 DOM 元素

// 问题：
// 一个组件的显示形态由多个状态决定的情况非常常见。
// 代码中混杂着对 DOM 的操作其实是一种不好的实践，手动管理数据和 DOM 之间的关系会导致代码可维护性变差、容易出错
// 如何尽量减少这种手动 DOM 操作？

// 思路：
// 只要调用 setState，组件就会重新渲染
// 用户每次点击，changeLikeText 都会调用改变组件状态然后调用 setState
// setState 会调用 render ，render 方法会根据 state 的不同重新构建不同的 DOM 元素
class LikeButton {
  constructor() {
    this.state = {
      isLiked: false
    }
  }

  setState(state) {
    const oldEl = this.el
    this.state = state
    this.el = this.render()
    if (this.onStateChange) this.onStateChange(oldEl, this.el)
  }

  changeLikeText() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    this.el = createDOMFromString(`
      <button class='like-btn'>
        <span class='like-text'>${ this.state.isLiked ? '取消' : '点赞' }</span>
        <span>👍</span>
      </button>
    `)
    this.el.addEventListener('click', this.changeLikeText.bind(this), false)
    return this.el
  }
}

const likeButton = new LikeButton()
const root = document.getElementById('root')
root.appendChild(likeButton.render()) // 第一次插入DOM元素
likeButton.onStateChange = (oldEl, newEl) => {
  root.insertBefore(newEl, oldEl) // 插入新元素
  root.removeChild(oldEl) // 删除旧的元素
}