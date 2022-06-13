import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from '../constants/auth.constannts';

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: LOGIN_START, payload: true });
    try {
        // const { data } = await axiosinstance.post('/how/admin/auth/login', User);

        dispatch({ type: LOGIN_SUCCESS, payload: {isAuthencated:true} });

        // localStorage.setItem('token', data.data.token);
        // localStorage.setItem('user', JSON.stringify(data.data.how));

    } catch (error) {
        dispatch({ type: LOGIN_ERROR, payload: false });

        if (error.response && error.response.data.error && error.response.data.error.message) {

            if (error.response.data.error.message.includes("email") && !error.response.data.error.message.includes("password")) {

                dispatch({ type: LOGIN_ERROR, payload: { email: error.response.data.error.message, password: "" } })
            }
            else if (error.response.data.error.message.includes("password") && !error.response.data.error.message.includes("email")) {
                dispatch({ type: LOGIN_ERROR, payload: { email: "", password: error.response.data.error.message } })
            }
            else {
                dispatch({ type: LOGIN_ERROR, payload: { email: error.response.data.error.message, password: "" } })
                // toast.error((error.response.data && error.response.data.error && error.response.data.error.message) || "Something went wrong");
            }
            return false;

        }

    }
}


