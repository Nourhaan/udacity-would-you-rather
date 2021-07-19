
import { FETCH_DATA_SUCCESS, CLEAR_PATH, REFRESH_UPDATES, LOGIN } from '../constants';

const initialState = {
    users: [],
    currentUser: '',
    path: '',
    question_path:''
};
export const UserReducer = (state = initialState, action) => {
    if (action.type === FETCH_DATA_SUCCESS) {
        return { ...state, users: action.users };
    }
    if (action.type === REFRESH_UPDATES) {
        let href = window.location.href;
        if (href.includes("/questions")) {
            window.location.replace('/login')
        }
        return {
            ...state, currentUser: null,
            path: window.location.pathname === '/login' ? '' : window.location.pathname
        };
    }
    if (action.type === CLEAR_PATH) {
        return { ...state, path: '' }
    }
    if (action.type === LOGIN) {
        return { ...state, currentUser: action.user };
    }
    return state;
}