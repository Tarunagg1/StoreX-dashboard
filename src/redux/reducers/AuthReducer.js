import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from '../constants/auth.constannts';

const initState = {
    loading: false,
    errorMessage: null,
    successMessage: null,
    isAuthencated: true,
    token: '',
    user: ''
}

const AuthReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_START:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, isAuthencated: payload.isAuthencated }
        case LOGIN_ERROR:
            return { ...state, loading: false, isAuthencated:false }
        default:
            return state;
    }
}

export default AuthReducer;
