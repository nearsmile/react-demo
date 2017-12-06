
/**
 * 定义 action types
 * 编写 reducer
 * 跟这个 reducer 相关的 action creators
 */

// action types
// 初始化
const INIT_COMMENTS = 'INIT_COMMENTS'
// 添加
const ADD_COMMENT = 'ADD_COMMENT'
// 删除
const DELETE_COMMENT = 'DELETE_COMMENT'

export default function (state, action) {
  if (!state) {
    state = { comments: [] }
  }

  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return { comments: action.comments }
    case ADD_COMMENT:
      // 新增评论
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}
