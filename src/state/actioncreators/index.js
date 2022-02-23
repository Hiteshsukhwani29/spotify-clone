const User = {
    user: null,
    playlists: [],
    playing: false,
    item: null
}

export const setUser = (user) =>{
    return (dispatch) => {
        dispatch({
            type: 'set-user',
            payload: user
        })
    }
}