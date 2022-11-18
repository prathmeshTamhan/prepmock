import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    User:loggedReducer
})

export default allReducers