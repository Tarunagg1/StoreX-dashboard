import CryptoJS from 'crypto-js';
import * as openpgp from 'openpgp';


// Method to hash password. If salt is passed, use it, in other case use crypto lib for generate salt
function passToHash(passObject) {
    try {
        const salt = passObject.salt ? CryptoJS.enc.Hex.parse(passObject.salt) : CryptoJS.lib.WordArray.random(128 / 8);
        const hash = CryptoJS.PBKDF2(passObject.password, salt, { keySize: 256 / 32, iterations: 10000 });
        const hashedObjetc = {
            salt: salt.toString(),
            hash: hash.toString()
        };

        return hashedObjetc;
    } catch (error) {
        throw error;
    }
}

// AES Plain text encryption method
function encryptText(textToEncrypt) {
    return encryptTextWithKey(textToEncrypt, process.env.REACT_APP_CRYPTO_SECRET);
}

// AES Plain text decryption method
function decryptText(encryptedText) {
    return decryptTextWithKey(encryptedText, process.env.REACT_APP_CRYPTO_SECRET);
}

// AES Plain text encryption method with enc. key
function encryptTextWithKey(textToEncrypt: string, keyToEncrypt: string) {
    try {
        const bytes = CryptoJS.AES.encrypt(textToEncrypt, keyToEncrypt).toString();
        const text64 = CryptoJS.enc.Base64.parse(bytes);

        return text64.toString(CryptoJS.enc.Hex);
    } catch (error) {
        throw error;
    }
}

// AES Plain text decryption method with enc. key
function decryptTextWithKey(encryptedText, keyToDecrypt) {
    if (!keyToDecrypt) {
        throw new Error('No key defined. Check .env file');
    }
    try {
        const reb = CryptoJS.enc.Hex.parse(encryptedText);
        const bytes = CryptoJS.AES.decrypt(reb.toString(CryptoJS.enc.Base64), keyToDecrypt);

        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        throw error;
    }
}

async function generateNewKeys() {
    const { privateKeyArmored, publicKeyArmored, revocationCertificate } = await openpgp.generateKey({
        userIds: [{ email: 'inxt@inxt.com' }],
        curve: 'ed25519'
    });

    window.Buffer = window.Buffer || require("buffer").Buffer;

    return {
        privateKeyArmored,
        publicKeyArmored: Buffer.from(publicKeyArmored, "base64").toString('base64'),
        revocationCertificate: Buffer.from(revocationCertificate).toString('base64')
    };
}



export {
    passToHash,
    encryptText,
    decryptText,
    encryptTextWithKey,
    decryptTextWithKey,
    generateNewKeys
};
