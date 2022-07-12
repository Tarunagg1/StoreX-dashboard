export const setAuthToken = (token) => {
    localStorage.setItem('SXtoken', token)
}

export const removeToken = () => {
    localStorage.removeItem('SXtoken')
}


export const getAuthToken = () => {
    return localStorage.getItem('SXtoken')
}


export const setKeyToLocalStorage = (key, data) => {
    localStorage.setItem(key, data)
}

export const getDataFromLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const removeKeyFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}


export const clearAllKeysFromLocalStorage = () => {
    localStorage.clear();
}