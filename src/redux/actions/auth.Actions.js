import { getAuthToken, removeToken } from '../../utils/common/localStorege';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, } from '../constants/auth.constannts';
import { encryptText, encryptTextWithKey, generateNewKeys, passToHash } from '../../utils/common/crypt'
import bip39 from "bip39";
// import AesUtil from "../../lib/AesUtil.ts";


export const isuserLogiIn = () => {
    return async (dispatch) => {
        const token = getAuthToken();
        if (token) {
            dispatch({ type: LOGIN_SUCCESS, payload: { token, isAuthencated: true } })
        } else {
            dispatch({ type: LOGIN_ERROR, payload: { error: 'failed to Login' } })
        }
    }
}


export const registerUserAction = async (data) => {
    const hashObj = passToHash({ password: data.password });
    const encPass = encryptText(hashObj.hash);
    const encSalt = encryptText(hashObj.salt);

    // Setup mnemonic
    const mnemonic = bip39.generateMnemonic(256);
    const encMnemonic = encryptTextWithKey(
        mnemonic,
        this.state.register.password
    );

    //Generate keys
    const {
        privateKeyArmored,
        publicKeyArmored: codpublicKey,
        revocationCertificate: codrevocationKey,
    } = await generateNewKeys();

    //Datas
    // const encPrivateKey = AesUtil.encrypt(
    //     privateKeyArmored,
    //     this.state.register.password,
    //     false
    // );


    return async (dispatch) => {
        try {

        } catch (error) {

        }
    }
}


export const logoutUserAction = (user) => async (dispatch) => {
    removeToken();
    dispatch({ type: LOGOUT_SUCCESS });
}

