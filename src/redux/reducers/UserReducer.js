
import { FETCH_DATA_SUCCESS, REFRESH_UPDATES, LOGIN } from '../constants';

const initialState = {
    users: [],
    currentUser: ''
};
export const UserReducer = (state = initialState, action) => {
    if (action.type === FETCH_DATA_SUCCESS) {
        return { ...state, users: action.users };
    }
    if (action.type === REFRESH_UPDATES) {
        let href = window.location.href;
        if (href.includes("/questions") ) {
            window.location.replace('/login')      
        }
        return { ...state, currentUser: null };
    }

    if (action.type === LOGIN) {
        return { ...state, currentUser: action.user };
    }
    return state;
}