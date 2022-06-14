import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS } from '../constants/auth.constannts';

const initState = {
    loading: false,
    errorMessage: null,
    successMessage: null,
    isAuthencated: false,
    token: null,
    user: null
}

const AuthReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_START:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthencated: payload.isAuthencated }
        case LOGIN_ERROR:
            return { ...state, loading: false, isAuthencated: false }
        case LOGOUT_START:
            return { ...state, loading: true }
        case LOGOUT_SUCCESS:
            return { ...state, loading: false, isAuthencated: false, user: null, token: null }
        case LOGOUT_ERROR:
            return { ...state, loading: false }
        default:
            return state;
    }
}

export default AuthReducer;
