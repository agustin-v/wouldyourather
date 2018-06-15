import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadUsers} from '../actions/usersActions'

import Routes from './Routes'
import Login from './Login'

class App extends React.Component  {

    componentDidMount() {
        this.props.dispatch(loadUsers())
    }
    
    render () {
        const { authenticated } = this.props
        return(
            authenticated ? <Routes/> : <Login/>
        
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated
  }
}

export default withRouter(connect(mapStateToProps)(App))