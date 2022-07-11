import axios from 'axios';
import { getAuthToken } from '../common/localStorege';

const token = getAuthToken();

console.log(process.REACT_APP_ENV);
const REACT_APP_API_BASE_URL = process.REACT_APP_ENV === "production" ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_dev;

const axiosinstance = axios.create({
    baseURL: REACT_APP_API_BASE_URL,
    headers: {
        "Authrization": token ? `Bearear ${token}` : ""
    }
});

// axiosinstance.interceptors.request.use((req) => {
//     const {auth:{token}} = store.getState();
//     if(token){
//         req.headers.Authrization = `Bearer ${token}`;
//     }
//     return req;
// })


export default axiosinstance;
