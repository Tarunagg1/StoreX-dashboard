import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  MENU_OVERLAY_OFF,
  MENU_OVERLAY_ON,
  ACTIVE_LINK
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
        isAuthencated: payload.isAuthencated
      };
    case LOGIN_ERROR:
      return { ...state, loading: false, isAuthencated: false };
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
    default:
      return state;
  }
};

export default AuthReducer;
