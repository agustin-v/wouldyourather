import { combineReducers } from 'redux'

import { authentication } from './userReducer';
import { users } from './usersReducer'
import { questions } from './questionsReducer'

const rootReducer = combineReducers({
    authentication,
    users,
    questions,
});

export default rootReducer;