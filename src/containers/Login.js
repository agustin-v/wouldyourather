import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions'

import LoginForm from '../components/LoginForm/LoginForm'

const Login = ({users, dispatch }) => {

    const authUser = (user) => {
        dispatch(login(user))
    }

    return(
        <div>
            <LoginForm 
                users = { users }
                authUser = { authUser }
            />
        </div>
    )
}

const mapStateToProps = ({users}) => {
    return {
      users: Object.keys(users).map( user => { return { id: users[user].id, name:  users[user].name, avatarURL: users[user].avatarURL}})
    }
  }

export default connect(mapStateToProps)(Login)