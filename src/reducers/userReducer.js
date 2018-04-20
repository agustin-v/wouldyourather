import { LOGIN, LOGOUT } from '../actions/userActions';

const initialState = {
    authenticated: false, 
    user: {}
}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
                user: action.user
            }
        case LOGOUT:
            return {
                authenticated: false, 
                user: {} 
            }
        default:
            return state
    }
}