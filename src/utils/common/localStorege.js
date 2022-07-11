export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token)
}

export const removeToken = (token) => {
    localStorage.removeItem('authToken')
}


export const getAuthToken = () => {
    return localStorage.getItem('authToken')
}


export const setKeyToLocalStorage = (key, data) => {
    localStorage.setItem(key, data)
}

export const getKeyToLocalStorage = (key) => {
    return localStorage.getItem(key)
}

export const removeKeyFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}


export const clearAllKeysFromLocalStorage = () => {
    localStorage.clear();
}