import { combineReducers } from "redux";
import spotifyReducer from "./spotifyReducer";

const reducers = combineReducers({
    t1: spotifyReducer
})

export default reducers;