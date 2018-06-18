import { RECEIVE_USERS, ANSWER_POLL, SAVE_ASKED_QUESTION } from '../actions/usersActions'


export function users ( state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ANSWER_POLL:
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_ASKED_QUESTION: 
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    questions: state[action.user].questions.concat([action.question])
                }
            }
        default :
                return state
    }
}