import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  MENU_OVERLAY_OFF,
  MENU_OVERLAY_ON,
  ACTIVE_LINK,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  CLEAR_MESSAGES
} from "../constants/auth.constannts";

const initState = {
  loading: false,
  errorMessage: null,
  successMessage: null,
  isAuthencated: false,
  token: null,
  user: null,
  MenuOver: "-1000px",
  activeLink: "Get_started"
};

const AuthReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user:payload.user,
        // user:payload.user,
        isAuthencated: payload.isAuthencated
      };
    case LOGIN_ERROR:
      return { ...state, loading: false, isAuthencated: false };


    case REGISTRATION_START:
      return { ...state, loading: true };
    case REGISTRATION_SUCCESS:
      return { ...state, loading: false, successMessage: payload.successMessage };
    case REGISTRATION_ERROR:
      return { ...state, loading: false, errorMessage: payload.errorMessage };

    case LOGOUT_START:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthencated: false,
        user: null,
        token: null
      };
    case LOGOUT_ERROR:
      return { ...state, loading: false };


    case MENU_OVERLAY_ON:
      return { ...state, MenuOver: "0px" };
    case MENU_OVERLAY_OFF:
      return { ...state, MenuOver: "-1000px" };
    case ACTIVE_LINK:
      return { ...state, activeLink: payload };

    case CLEAR_MESSAGES:
      return { ...state, loading: false,errorMessage:null,successMessage:null };


    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default AuthReducer;
