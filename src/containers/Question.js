import React from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/usersActions'
import { savePollAnswerUser } from '../actions/questionsActions'
import { Link, withRouter } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from 'material-ui/svg-icons/action/home';
import ContentAdd from 'material-ui/svg-icons/content/add'

import PendingAnswer from '../components/PendingAnswer/PendingAnswer'
import Answered from '../components/Answered/Answered'

const Question = ({ user, question , author, answered, question_id, qtyUsers, dispatch }) => {

    const saveAnswer = (answer) => {
        dispatch(handleSaveAnswer(user.id, question_id, answer))
        dispatch(savePollAnswerUser(user.id, question_id, answer))
    }

    return (
        <React.Fragment>
            <div className='container'>
                {!answered
                    ? <PendingAnswer 
                        avatarURL={author.avatarURL}
                        optionOne={question.optionOne.text}
                        optionTwo={question.optionTwo.text}
                        saveAnswer={saveAnswer}
                    />
                    : <Answered 
                        answer={question[user.answers[question_id]].text}
                        votes={question[user.answers[question_id]].votes.length}
                        percentage={(question[user.answers[question_id]].votes.length*100)/qtyUsers}
                    />
                }
            </div>
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
        </React.Fragment>
    )
}

const mapStateToProps = ({authentication, questions, users}, props) => {
    const question_id = props.match.params.question_id;
    return {
        user: users[authentication.user],
        question: questions[question_id],
        author: users[questions[question_id].author],
        answered: users[authentication.user].answers[question_id] ? true : false,
        question_id : question_id,
        qtyUsers: Object.keys(users).length,
    }
}

export default connect(mapStateToProps)(Question);