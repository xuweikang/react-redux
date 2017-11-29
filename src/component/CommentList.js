
import React,{Component} from 'react'
import Comment from './Comment'
import wraWithTest from './wrapWithTest'
class ComponentList extends Component {

     static defaultProps = {
        comments: []
      }

    render(){
        return (
            <div>
                {this.props.comments.map((comment,i) => 
                    <Comment comment={comment} key={i}/>
                )}
                {this.props.data1}
            </div>
        )
    }
}

ComponentList = wraWithTest(ComponentList, '12344sad')

export default ComponentList
