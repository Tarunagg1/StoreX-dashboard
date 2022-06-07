const initState = {
    loading: false,
    registerErrors: [],
    loginErrors: [],
    token: '',
    user: ''
}

const AuthReducer = (state = initState, action) => {
    // console.log(action);
    if (action.type === 'SET_LODER') {
        return { ...state, loading: true }
    }
    else {
        return state
    }
}

export default AuthReducer;
