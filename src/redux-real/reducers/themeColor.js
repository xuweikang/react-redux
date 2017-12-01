// action types
const CHANGE_COLOR = 'CHANGE_COLOR'
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
// reducer
export default function (state, action) {

  if (!state) {
    state = { themeColor: 'red' }
  }
  switch (action.type) {
    case CHANGE_COLOR:
      // 改变颜色
      return { ...state,themeColor: action.themeColor }
    
    default:
      return state
  }
}

// action creators
//改变主题颜色
export const changeColor = (color) => {
  return { type: CHANGE_COLOR, color}
}

//请求开始
export const requestPosts = (postParams) => {
  return { type: FETCH_POSTS_REQUEST, postParams }
}
//请求完成
export const receivePosts = (postParams, json) => {
  return { type: FETCH_POSTS_SUCCESS, postParams ,json}
}
