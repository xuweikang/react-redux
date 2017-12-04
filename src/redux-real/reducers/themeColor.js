// action types
const CHANGE_COLOR = 'CHANGE_COLOR'
const CHANGE_STATUS = 'CHANGE_STATUS'
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
// reducer
export default function (state, action) {

  if (!state) {
    state = { themeColor: 'red', postStatus: 0, postParams: '', response: '', error: '' }
  }
  switch (action.type) {
    case CHANGE_COLOR:
      // 改变颜色
      return { ...state,themeColor: action.themeColor }
    case CHANGE_STATUS:
      //请求的状态  0:尚未请求 1:请求中 2:请求完成 3：请求失败
      return { ...state, postStatus: action.postStatus }
    case FETCH_POSTS_REQUEST:
      //请求开始
      return { ...state,postParams: action.postParams }
    case FETCH_POSTS_SUCCESS:
      //请求完成
      return { ...state,postParams: action.postParams ,response: action.response}
    case FETCH_POSTS_ERROR:
      //请求失败
      return { ...state,error: action.error}      
    default:
      return state
  }
}

// action creators
//改变主题颜色
export const changeColor = (color) => {
  return { type: CHANGE_COLOR, themeColor: color}
}

export const changePostStatus = (status) => {
  return { type: CHANGE_STATUS, postStatus: status}
}

//请求开始
export const requestPosts = (postParams) => {
  return { type: FETCH_POSTS_REQUEST, postParams }
}
//请求完成
export const receivePosts = (postParams, response) => {
  return { type: FETCH_POSTS_SUCCESS, postParams ,response}
}
//请求失败
export const errorPosts = (error) => {
  return { type: FETCH_POSTS_ERROR, error }
}
