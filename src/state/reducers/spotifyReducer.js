// const initialState = {
//     user: null,
//     playlists: [],
//     playing: false,
//     item: null
// };

const spotifyReducer = (state={}, action) => {
    switch (action.type) {
        case 'set-user':
            return JSON.stringify(action.payload);
        default: return state;
    }
}

export default spotifyReducer;