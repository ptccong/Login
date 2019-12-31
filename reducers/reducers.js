import { LOGIN, LOGIN_TC, LOGIN_TB } from '../actions'

const reducers = (user = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return navigator('Profile');
        case 'LOGIN_TB':

            return []
        case 'LOGIN_TC':

            return[...user,action.a]

        default:
            break;
    }
}