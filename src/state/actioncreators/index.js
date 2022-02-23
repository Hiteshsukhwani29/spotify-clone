export const setUser = (user) =>{
    return (dispatch) => {
        dispatch({
            type: 'set-user',
            payload: user
        })
    }
}

export const setToken = (token) =>{
    return (dispatch) => {
        dispatch({
            type: 'set-token',
            payload: token
        })
    }
}