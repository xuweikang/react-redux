import React ,{ Component, PropTypes} from 'react'
import connect from './ConnectHigh'
import fetch from 'isomorphic-fetch'
import {requestPosts, changePostStatus, receivePosts, errorPosts} from '../reducers/themeColor'


class AsyncApp extends Component{


    componentWillMount(){
        this.props.requestPosts
    }

    componentDidMount(){
        // fetch('../mock.json').then(response => {return response.json()})
        // .then(data => {
        //     console.log(data)
        // })
        this.props.changeStatus(0)
        const fetchPosts = postParams => (dispatch, getState) => {
            // dispatch(requestPosts(postParams))
            this.props.requestPosts(postParams)
            this.props.changeStatus(1)
            return fetch('../mock.json').then(response => response.json()).then(
                data => {
                    var _self = this
                   setTimeout(function(){
                    _self.props.changeStatus(2) 
                    _self.props.receivePosts(postParams, data.text)
                   },2000)
                }
             ).catch(
                error => {
                    this.props.changeStatus(3) 
                    this.props.errorPosts(error)
                }
            )
        }
        // store.dispatch(fetchPosts('异步开始了。。。'))
        this.props.asyncPosts(fetchPosts('异步开始了。。。'))
    }


    render(){
        return(
            <h1 style={{color: this.props.themeColor}}>
            <p>请求状态是 {this.props.postStatus}</p>
            { 
                this.props.postStatus == 0? '这里面是异步内容':this.props.postStatus == 1?this.props.postParams:this.props.postStatus == 2?this.props.response:this.props.error
             }</h1>
        )
    }
}

const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor,
        postStatus: state.postStatus,
        postParams: state.postParams,
        response: state.response,
        error: state.error
    }
}
const mapDispatchToProps = () => {

}

const mapDispatchToPropsAsync = (dispatch,getState) => {
    return {
        asyncPosts: (f) => {
            dispatch(f)
        },
        changeStatus: (status) => {
            dispatch(changePostStatus(status))
        },
        requestPosts: (postParams) => {
            dispatch(requestPosts(postParams))
        },
        receivePosts: (postParams, data) => {
            dispatch(
                receivePosts(postParams, data)
            )
        },
        errorPosts: (error) =>{
            dispatch(
                errorPosts(error)
            )
        }
    }
}

AsyncApp = connect(mapStateProps,'',mapDispatchToPropsAsync)(AsyncApp)

export default AsyncApp