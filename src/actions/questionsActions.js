import { _getQuestions, _saveQuestion } from '../data/_DATA'
import { saveAskedQuestion } from './usersActions'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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

export function savePollAnswerUser(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function saveQuestion(question) {
    return (dispatch) => {
        return _saveQuestion(question).then((formattedQuestion) => {
            dispatch(setQuestion(formattedQuestion))
            dispatch(saveAskedQuestion(formattedQuestion.author, formattedQuestion.id))
        })
        .catch((err) => {
            console.warn('Error in saving answer: ', err)
        })
    }
}

export function setQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}