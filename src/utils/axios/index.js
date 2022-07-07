import axios from 'axios';

const token = "oj";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_ENV === "development" ? process.env.REACT_APP_API_URL_dev : process.env.REACT_APP_API_URL_PROD;

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
