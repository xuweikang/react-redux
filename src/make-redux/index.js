
const store =createStore(reducer)
let oldState = store.getState
store.observe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
})
renderApp(store.getState())
store.dispatch({type:'UPDATE_TITLE_TEXT',text:'new text'})
store.dispatch({type:"UPDATE_TITLE_COLOR",color:'black'})
function createStore(reducer){
    let state = null
    const listeners = []
    const observe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({})   //初始化
    return { getState, dispatch, observe}
}

function reducer(state, action){

    if(!state){
       return {
        title:{
            text: 'react redux make',
            color: 'red'
        },
        content:{
            text: '这是一个content',
            color: 'blue'
        }
       }
    }

    switch (action.type){
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title:{
                    ...state.title,
                    text: action.text
                }
            }
            break
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title:{
                    ...state.title,
                    color: action.color
                }
            }
            break
        default:
            return state
            break
    }
}

function renderApp(newAppState, oldAppState = {}){
    if(newAppState === oldAppState) return
    console.log('render App')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}
function renderTitle(newTitle, oldTitle={}){
    if(newTitle === oldTitle)  return
    console.log('render Title')    
    const titleDom = document.getElementById('title')
    titleDom.innerHTML = newTitle.text
    titleDom.style.color = newTitle.color
}
function renderContent(newContent, oldContent={}){
    if(newContent === oldContent)  return
    console.log('render Content')    
    const contentDom = document.getElementById('content')
    contentDom.innerHTML = newContent.text
    contentDom.style.color = newContent.color
}
