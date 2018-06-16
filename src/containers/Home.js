import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Poll from 'material-ui/svg-icons/social/poll';
import Paper from 'material-ui/Paper';


class Home extends Component {

    render() {
        const { users, questions } = this.props
        return (
            <div className='container'>
                <Paper style={ {textAlign: 'center', margin: '20px', padding: '20px'} } zDepth={1} rounded={false}>
                    <List>
                        {questions.map((question) => {
                            return <Link key={question.id} to={`/questions/${question.id}`} style={{textDecoration: 'none'}}>
                                <ListItem 
                                    primaryText={`${question.author}: would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`} 
                                    leftAvatar={<Avatar src={users[question.author].avatarURL} />}
                                    rightIcon={<Poll />}
                                />
                            </Link>
                        })}
                    </List>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({authentication, questions, users}) => {
    const allQuestions = Object.keys(questions).map(question => {
        return questions[question]
    })

    return {
        user: authentication.user,
        questions: allQuestions,
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(Home));