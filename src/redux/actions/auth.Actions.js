import { getAuthToken, removeToken } from '../../utils/common/localStorege';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, } from '../constants/auth.constannts';

export const isuserLogiIn = () => {
    return async (dispatch) => {
        const token = getAuthToken();
        console.log(token);
        if (token) {
            dispatch({ type: LOGIN_SUCCESS, payload: { token, isAuthencated: true } })
        } else {
            dispatch({ type: LOGIN_ERROR, payload: { error: 'failed to Login' } })
        }
    }
}


export const registerUserAction = () => {
    return async (dispatch) => {
        
    }
}


export const logoutUserAction = (user) => async (dispatch) => {
    removeToken();
    dispatch({ type: LOGOUT_SUCCESS });
}

