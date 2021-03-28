import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducers from "./usersReducers"

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducers
})

let store = createStore(redusers)

//window.store = store

export default store