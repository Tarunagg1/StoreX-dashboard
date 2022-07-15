import { toast } from 'react-toastify';
import { clearAllKeysFromLocalStorage, getAuthToken, getDataFromLocalStorage, removeToken } from '../../utils/common/localStorege';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, SET_LOADING_FALSE, SET_LOADING_TRUE, SET_USER_UPDATE_DETAILS, } from '../constants/auth.constannts';
import axiosinstance from '../../utils/axios/index'
import store from '../index';
import { encryptText, encryptTextWithKey, generateNewKeys, passToHash } from '../../utils/common/crypt';
import { generateMnemonic } from 'bip39';
// import AesFunctions from '../../lib/AesUtil';

export const isuserLogiIn = () => {
    return async (dispatch) => {
        const token = getAuthToken();
        const user = JSON.parse(getDataFromLocalStorage("SXuser"));
        if (token && user) {
            dispatch({ type: LOGIN_SUCCESS, payload: { token, isAuthencated: true, user } })
        } else {
            if (token) {
                dispatch(logoutUserAction());
            }
            dispatch({ type: LOGIN_ERROR, payload: { error: 'failed to Login' } })
        }
    }
}


const readReferalCookie = () => {
    const cookie = document.cookie.match(/(^| )REFERRAL=([^;]+)/);
    return cookie ? cookie[2] : null;
}


export const registerUserAction = (data) => {
    return async (dispatch) => {
        const hashObj = passToHash({ password: data.password });
        const encPass = encryptText(hashObj.hash);
        const encSalt = encryptText(hashObj.salt);

        // Setup mnemonic
        const mnemonic = generateMnemonic(256);
        const encMnemonic = encryptTextWithKey(
            mnemonic,
            data.password
        );

        //Generate keys
        const {
            privateKeyArmored,
            publicKeyArmored: codpublicKey,
            revocationCertificate: codrevocationKey,
        } = await generateNewKeys();

        // //Datas
        // const encPrivateKey = AesFunctions.encrypt(
        //     privateKeyArmored,
        //     data.password,
        //     false
        // );

        let body = {
            name: data.name,
            lastname: data.lastname,
            // email: data.email,
            // password: encPass,
            // // mnemonic: encMnemonic,
            // salt: encSalt,
            // referral: readReferalCookie(),
            // privateKey: encPrivateKey,
            // publicKey: codpublicKey,
            // revocationKey: codrevocationKey,
        }

        try {
            dispatch({ type: SET_LOADING_TRUE });
            // access key payload and call api
            const resp = await axiosinstance.post('/register', body);
            console.log(resp);
            dispatch({ type: SET_LOADING_FALSE });
        } catch (error) {
            dispatch({ type: SET_LOADING_FALSE });
            console.log(error);
            if (error.response && error.response.data && error.response.status === 400) {
                //   alert.error(error.response.data.error);
                return;
            } else if (error.response && error.response.data && error.response.status !== 200) {
                //   alert.error(error.response.data.error);
                return;
            } else {
                //   alert.error("Something went wrong");
            }
        }
    }
}

export const genrateAndRegenrateKeysAction = (testmode) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING_TRUE });

            // access key payload and call api
            let url = testmode ? "/test-access-key" : "/live-access-key"
            const { data } = await axiosinstance.post(url);

            let { Auth: { user } } = store.getState();

            for (let key in data) {
                user[key] = data[key];
            }

            dispatch({ type: SET_LOADING_FALSE });
            dispatch({ type: SET_USER_UPDATE_DETAILS, payload: user });

            if (testmode) {
                toast.success("Test api keys generated successfully")
            } else {
                toast.success("Live api keys generated successfully")
            }

        } catch (error) {
            console.log(error);
            dispatch({ type: SET_LOADING_FALSE });
            if (error.response && error.response.data && error.response.status === 400) {
                toast.error(error.response.data.error);
                return;
            } else if (error.response && error.response.data && error.response.status !== 200) {
                toast.error(error.response.data.error);
                return;
            } else {
                toast.error("Something went wrong");
            }
        }
    }
}

export const logoutUserAction = () => async (dispatch) => {
    removeToken();
    clearAllKeysFromLocalStorage();
    toast.warning("Session logout");
    dispatch({ type: LOGOUT_SUCCESS });
}

