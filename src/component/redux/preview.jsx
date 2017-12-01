import React from 'react'
// import { createStore, stateChanger } from './next'
import { stateChanger } from './next'
import { createStore } from './optimize'
const appState = {
  title: {
    text: 'Demo',
    color: 'red'
  },
  content: {
    text: 'Preview',
    color: 'green'
  }
}

function renderApp (appState) {
  console.log('%crenderApp...', 'color:red')
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle (title) {
  // if ()
  console.log('%crenderTitle...', 'color:green')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}
function renderContent (content) {
  console.log('%crenderContent...', 'color:blue')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}
// 定义一个函数，叫 dispatch，它专门负责数据的修改
// 所有对数据的操作必须通过 dispatch 函数
// 它接受一个参数 action，这个 action 是一个普通的 JavaScript 对象，里面必须包含一个 type 字段来声明你到底想干什么。
// dispatch 在 swtich 里面会识别这个 type 字段，能够识别出来的操作才会执行对 appState 的修改。
function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    case 'UPDATE_CONTENT_TEXT':
      appState.content.text = action.text
      break
    case 'UPDATE_CONTENT_COLOR':
      appState.content.color = action.color
      break
    default:
      break
  }
}

renderApp(appState) //  首次渲染页面

// dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'React Demo' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })

/* function createStore (state, stateChanger) {
  const getState = () => state
  const dispatch = (action) => stateChanger(state, action)
  return { getState, dispatch }
}
 */
/* function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLLOR':
      state.title.color = action.color
      break
    case 'UPDATE_CONTENT_TEXT':
      state.content.text = action.text
      break
    case 'UPDATE_CONTENT_COLOR':
      state.content.color = action.color
      break
    default:
      break
  }
} */
// renderApp(appState) // 把新数据渲染到页面上

/* 采用观察者模式 */

const Store = createStore(appState, stateChanger)
Store.subscribe(() => renderApp(Store.getState()))
// console.log(`%c${JSON.stringify(Store)}`, 'color:red')
Store.dispatch({ type: 'UPDATE_CONTENT_TEXT', text: 'React Content' })
Store.dispatch({ type: 'UPDATE_CONTENT_COLOR', color: 'pink' })

