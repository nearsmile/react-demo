
/**
 * 用到观察者模式
 * 数据变化的时候程序能够自动重新渲染数据
 * 定义了一个数组 listeners，还有一个新的方法 subscribe，
 * 可以通过 store.subscribe(listener) 的方式给 subscribe 传入一个监听函数，
 * 这个函数会被 push 到数组当中
 * @param {props} state 
 * @param {Callback} stateChanger 
 */
function createStorePreview (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  return { getState, dispatch, subscribe }
}

function createStore (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  return { getState, dispatch, subscribe }
}

/* export {
  createStorePreview,
  createStore
} */

let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function renderApp (newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return
  console.log('%crenderApp...', 'color:red')
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return // 数据没有变化就不渲染了
  console.log('%crenderTitle...', 'color:green')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}
function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return
  console.log('%crenderContent...', 'color:blue')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.tilte,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    case 'UPDATE_CONTENT_TEXT':
      return {
        ...state,
        content: {
          ...state.content,
          text: action.text
        }
      }
    case 'UPDATE_CONTENT_COLOR':
      return {
        ...state,
        content: {
          ...state.content,
          color: action.color
        }
      }
    default:
      return state
  }
}

const Store = createStore(appState, stateChanger)
Store.subscribe(() => renderApp(Store.getState()))
// console.log(`%c${JSON.stringify(Store)}`, 'color:red')
Store.dispatch({ type: 'UPDATE_CONTENT_TEXT', text: 'React Content' })
Store.dispatch({ type: 'UPDATE_CONTENT_COLOR', color: 'pink' })
