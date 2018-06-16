import React from 'react';
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadUsers } from '../actions/usersActions'
import { loadQuestions } from '../actions/questionsActions'
import { logout } from '../actions/userActions'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';

import Routes from './Routes'
import Login from './Login'

class App extends React.Component  {

    logout = () => {
        this.props.dispatch(logout())
    }

    componentDidMount() {
        this.props.dispatch(loadUsers())
        this.props.dispatch(loadQuestions())
    }

    render () {
        const { authenticated, user } = this.props
        return(
            authenticated 
                ? <React.Fragment>
                    <AppBar
                        title={`${user.name}, would you rather...`}
                        iconElementLeft={<Link to={'/'} style={{textDecoration: 'none'}}><IconButton><ActionHome /></IconButton></Link>}
                        iconElementRight={<Link to={'/'} style={{textDecoration: 'none'}}><FlatButton label="Logout" onClick={(e) => this.logout() }/></Link>} 
                    /> 
                    <Routes/>
                </React.Fragment>
                : <Login/>
        
        )
    }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated,
    user: state.authentication.user
  }
}

export default withRouter(connect(mapStateToProps)(App))