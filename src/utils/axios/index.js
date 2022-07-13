import axios from 'axios';
import store from '../../redux';
import { logoutUserAction } from '../../redux/actions/auth.Actions';
import { getAuthToken } from '../common/localStorege';


const REACT_APP_API_BASE_URL = process.env.REACT_APP_ENV === "production" ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_dev;

const axiosinstance = axios.create({
    baseURL: REACT_APP_API_BASE_URL,
});

axiosinstance.interceptors.request.use((req) => {
    const { Auth: { token } } = store.getState();
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
})


axiosinstance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    const status = error.response.status ? error.response.status : 500;
    if (status && status === 401) {
        store.dispatch(logoutUserAction());
    }
    return Promise.reject(error);
})

export default axiosinstance;
