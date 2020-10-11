import { combineReducers, createStore } from "redux";
import dialogsReducer from './dialogsReducer'

let reducers = combineReducers({
    DialogPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;