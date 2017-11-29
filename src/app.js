
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './component/CommentApp'
class App extends Component {
    render(){
        return (
            <div>
                <CommentApp >
                </CommentApp>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)
