import { _getUsers, _saveQuestionAnswer } from '../data/_DATA'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_POLL = 'ANSWER_POLL'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS, 
        users,
    }
}

export function loadUsers() {
    return (dispatch) => {
        return _getUsers()
        .then((users) =>{
            dispatch(receiveUsers(users))
        })
    }
}

export function handleSaveAnswer(authedUser, qid, answer) {
    console.log('from action creator',authedUser, qid, answer)
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(answerPoll(authedUser, qid, answer))
        })
        .catch( (err) => {
            console.warn('Error in saving answer: ', err)
        })
    }
}

export function answerPoll(authedUser, qid, answer) {
    return {
        type: ANSWER_POLL,
        authedUser,
        qid,
        answer
    }
}