import { _getQuestions} from '../data/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function loadQuestions() {
    return (dispatch) => {
        return _getQuestions()
        .then((questions) =>{
            dispatch(receiveQuestions(questions))
        })
    }
}