
import React,{Component} from 'react'
class ComponentInput extends Component {

    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
        this.textarea = null
    }
    componentWillMount(){
       this._loadUsername()
     }
     componentDidMount(){
         this.textarea.focus()
     }
    _saveUsername(username){
        localStorage.username = username
    }
    _loadUsername(){
        var usernameLocal = localStorage.getItem('username') || ''
        this.setState({
           username: usernameLocal
       })
    }

    handleInputBlur(e){
        this._saveUsername(e.target.value)
    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
    }
    handleRelease(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createTime: +new Date()

            })
        }
        this.setState({
            content: ''
        })
     }

    render(){
        return (
            <div>
                <div className='userInput'>
                    用户名:  <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleInputBlur.bind(this)}/>
                </div>
                <div className='commentContent'>
                    评论内容:  <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} ref={(textarea) => this.textarea = textarea}></textarea>
                </div>
                <div className="btn" >
                    <button onClick={this.handleRelease.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default ComponentInput
