import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const Leaderboard = ({ users }) => {
    return (
        <div className='container'>
            <Paper style={ {textAlign: 'jsutify', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                <List>
                    {
                        users.map(user => {
                            return <ListItem
                                key={user.id}
                                leftAvatar={<Avatar src={user.avatarURL} />}
                                primaryText={user.name}
                                secondaryText={`Asked: ${user.questions.length}, Answered: ${Object.keys(user.answers).length}`}
                            />
                        })
                    }
                </List>
            </Paper>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <FloatingActionButton style={{position: 'absolute', left: '20px', bottom: '20px'}}>
                    <Home />
                </FloatingActionButton>
            </Link>
            <Link to={'/add'} style={{textDecoration: 'none'}}>
                <FloatingActionButton style={{position: 'absolute', right: '20px', bottom: '20px'}}>
                    <ContentAdd />
                </FloatingActionButton>
            </Link>
        </div>
    )
}

const mapStateToProps = ({users}) => {
   
    return {
        users: Object.keys(users).map( user => { return users[user]}).sort((a, b) => { return (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)})
    }
}

export default withRouter(connect(mapStateToProps)(Leaderboard));