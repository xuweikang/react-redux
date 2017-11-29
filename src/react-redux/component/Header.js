import React ,{ Component, PropTypes} from 'react'
import connect from './ConnectHigh'
class Header extends Component{

    static contextTypes = {
        store: PropTypes.object
    }
    // constructor(){
    //     super()
    //     this.state = { themeColor: ''}
    // }
    // componentWillMount(){
    //     const { store } = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }
    // _updateThemeColor(){
    //     const { store } = this.context
    //     const state = store.getState()
    //     this.setState({
    //         themeColor: state.themeColor
    //     })
    // }


    render(){
        return(
            <h1 style={{color: this.props.themeColor}}>Hello world</h1>
        )
    }
}

const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateProps)(Header)

export default Header