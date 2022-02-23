import { combineReducers } from "redux";
import spotifyReducer from "./spotifyReducer";

const reducers = combineReducers({
    user: spotifyReducer
})

export default reducers;