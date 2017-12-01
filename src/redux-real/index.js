import React, {Component, PropTypes} from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import Header from './component/Header'
import Content from './component/Content'
import AsyncApp from './component/AsyncApp'
import reducersThemeColor from './reducers/themeColor' 
// function createStore (reducer){
//     let state = null
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//       state = reducer(state, action)
//       listeners.forEach((listener) => listener())
//     }
//     dispatch({}) // 初始化 state
//     return { getState, dispatch, subscribe }
// }


// const themeReducer = (state, action) => {
//     if(!state) return {
//         themeColor: 'red',
//         asyncText: ''
//     }
//     switch (action.type){
//         case 'CHANGE_COLOR':
//             return {...state,themeColor: action.themeColor}
//         default :
//             return state
//     }
// }

const store = createStore(reducersThemeColor,applyMiddleware(thunk))

class Index extends Component{
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext(){
        return { store }
    }
    render(){
        return (
            <div>
                <Header />
                <Content />
                <AsyncApp />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)