import React from 'react'

/**
 * 把它们集中到一个地方，给这个地方起个名字叫做 store，
 * 然后构建一个函数 createStore，用来专门生产这种 state 和 dispatch 的集合，
 * 这样别的 App 也可以用这种模式了
 */


/**
 * createStore 接受两个参数，一个是表示应用程序状态的 state；
 * 另外一个是 stateChanger，它来描述应用程序状态会根据 action 发生什么变化，
 * 其实就是相当于preview.jsx的 dispatch 代码里面的内容。
 * 
 * createStore 会返回一个对象，这个对象包含两个方法 getState 和 dispatch。
 * getState 用于获取 state 数据，其实就是简单地把 state 参数返回。
 * dispatch 用于修改数据，和以前一样会接受 action，
 * 然后它会把 state 和 action 一并传给 stateChanger，
 * 那么 stateChanger 就可以根据 action 来修改 state 了。
 * @param {String} state 
 * @param {Function} stateChanger 
 */
function createStore (state, stateChanger) {
  const getState = () => state
  const dispatch = (action) => stateChanger(state, action)
  return { getState, dispatch }
}

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

function stateChanger (state, action) {
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
}

export {
  createStore,
  stateChanger
}
