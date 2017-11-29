
import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
class CommentApp extends Component {

    constructor(){
        super()
        this.state = {
          comments: []
        }
    }
    componentWillMount(){
        this._loadComments()
    }

    _saveComments(comments){
        localStorage.comments = JSON.stringify(comments)
    }
    _loadComments(){
        var comments = localStorage.comments
        if(comments){
            comments = JSON.parse(comments)
            this.setState({comments})
        }
    }

    handleSubmitComment(commentObj){
        console.log(commentObj)
        const comments = this.state.comments
        comments.push(commentObj)
        this.setState({
           comments: comments
        })
        this._saveComments(comments)
    }

    render(){
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp
