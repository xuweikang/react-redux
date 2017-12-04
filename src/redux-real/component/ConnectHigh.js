import React, { Component, PropTypes} from 'react'

export default (mapStateToProps, mapDispatchToProps, mapDispatchToPropsAsync) => (WrappedComponent) => {
    class Connect extends Component {
      static contextTypes = {
        store: PropTypes.object
      }

      constructor(){
          super()
          this.state = { allProps: {} }
      }

      componentWillMount(){
          const {store} = this.context
          this._updateProps()
          store.subscribe( () => this._updateProps() )
      }

      _updateProps(){
          const { store } = this.context
          let stateProps = mapStateToProps? mapStateToProps(store.getState(), this.props) : {}
          let dispatchProps = mapDispatchToProps? mapDispatchToProps(store.dispatch, this.props): {}
          let dispatchAsync = mapDispatchToPropsAsync? mapDispatchToPropsAsync(store.dispatch,store.getState()):{}
          this.setState({
              allProps:{
                  ...stateProps,
                  ...dispatchProps,
                  ...dispatchAsync,
                  ...this.props
              }
          })
      }
    
      render () {
        return <WrappedComponent {...this.state.allProps}/>
      }
    }
  
    return Connect
  }
