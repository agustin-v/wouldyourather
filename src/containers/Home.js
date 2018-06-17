import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Toggle from 'material-ui/Toggle';
import Polls from '../components/Polls/Polls'


class Home extends Component {
    state = {
        answered: false
    }

    handleToggle = (e) => {
        this.setState({answered: !this.state.answered})
    }

    render() {
        const { users, questions, user } = this.props
        let newQuestions;

        if(!this.state.answered){
            newQuestions = questions.filter(question => Object.keys(user.answers).indexOf(question.id) === -1).sort((a,b) => b.timestamp - a.timestamp)
        } else {
            newQuestions = questions.filter(question => Object.keys(user.answers).indexOf(question.id) !== -1).sort((a,b) => b.timestamp - a.timestamp)
        }

        return (
            <div className='container'>
                <Toggle label={this.state.answered ? 'Answered' : 'Unanswered'} defaultToggled={this.state.answered} toggled={this.state.answered} onToggle={() => {this.handleToggle()}}/>
                <Polls users={users} questions={newQuestions} />
                <Link to={'/add'} style={{textDecoration: 'none'}}>
                    <FloatingActionButton style={{position: 'absolute', right: '20px', bottom: '20px'}}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Link>
                <Link to={'/leaderboard'} style={{textDecoration: 'none'}}>
                    <FloatingActionButton style={{position: 'absolute', left: '20px', bottom: '20px'}}>
                        <Dashboard />
                    </FloatingActionButton>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = ({authentication, questions, users}) => {
    return {
        user: users[authentication.user],
        questions: Object.keys(questions).map(question => questions[question]),
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(Home));