import { combineReducers } from 'redux'

import { authentication } from './userReducer';
import { users } from './usersReducer'

const rootReducer = combineReducers({
    authentication,
    users,
});

export default rootReducer;