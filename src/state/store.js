import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import spotifyReducer from "./reducers/spotifyReducer";

export const store = createStore(reducers, {}, applyMiddleware(thunk))