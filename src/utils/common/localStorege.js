export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token)
}

export const removeToken = (token) => {
    localStorage.removeItem('authToken')
}


export const getAuthToken = () => {
    return localStorage.getItem('authToken')
}




