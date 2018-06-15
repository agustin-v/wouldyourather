import { _getUsers} from '../data/_DATA'
export const RECEIVE_USERS = 'RECEIVE_USERS'

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