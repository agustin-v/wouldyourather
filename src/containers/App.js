import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux'

import Routes from './Routes'
import Login from './Login'

const App = ({ authenticated }) => {
  
  return(
    authenticated ? <Routes/> : <Login/>
    
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated
  }
}

export default withRouter(connect(mapStateToProps)(App))