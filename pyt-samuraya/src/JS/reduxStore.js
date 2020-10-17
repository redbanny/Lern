import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer'
import FriendReducer from "./FriendReducer";

let reducers = combineReducers({
    DialogPage: dialogsReducer,
    FriendsPage: FriendReducer
});

let store = createStore(reducers);

export default store;