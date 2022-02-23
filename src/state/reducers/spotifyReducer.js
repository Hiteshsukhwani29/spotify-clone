const spotifyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'set-user':
            return { ...state, user: action.payload };
        case 'set-token':
            return { ...state, token: action.payload };
        default: return state;
    }
}

export default spotifyReducer;