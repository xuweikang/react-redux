import React, {Component} from 'react'

class Comment extends Component {
    render(){
        return (
            <div>
                <span className="name">{this.props.comment.username}</span>：<span className="text">{this.props.comment.content}</span>
            </div>
        )
    }
}

export default Comment