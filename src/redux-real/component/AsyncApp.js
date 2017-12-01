import React ,{ Component, PropTypes} from 'react'
import connect from './ConnectHigh'
import fetch from 'isomorphic-fetch'
class AsyncApp extends Component{

    static contextTypes = {
        store: PropTypes.object
    }

    componentDidMount(){
        // const fetchPosts = postParams => (dispatch, getState) => {
        //     dispatch(requestPosts(postParams))
        //     return fetch('http://www.mockhttp.cn/mock/example').then(response => response.json()).then(json => dispatch(
        //         receivePosts(postParams, json)
        //     ))
        // }
        // const {store} = this.context
        // store.dispatch(fetchPosts('reactpostjs'))
    }


    render(){
        return(
            <h1 style={{color: this.props.themeColor}}>{}</h1>
        )
    }
}

// const mapStateProps = (state) => {
//     return {
//         themeColor: state.themeColor,
//         asyncText: state.asyncText
//     }
// }

// AsyncApp = connect(mapStateProps)(AsyncApp)

export default AsyncApp