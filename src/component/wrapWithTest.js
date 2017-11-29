import React, {Component} from 'react'

export default (WrappedCompinent,name) =>{
    class NewComponent extends Component{
        constructor(){
            super()
            this.state = {data: ''}
        }
        componentWillMount() {
            this.setState({data:name})
        }

        render(){
            return <WrappedCompinent {...this.props} data1={name}/>
        }
    }
    return NewComponent
}