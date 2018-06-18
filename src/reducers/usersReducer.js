import { RECEIVE_USERS, ANSWER_POLL } from '../actions/usersActions'


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
            default :
                return state
    }
}