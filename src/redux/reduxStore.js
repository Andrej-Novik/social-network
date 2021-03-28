import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducers from "./usersReducers"
import authReducer from "./authReducer"

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducers,
	auth: authReducer
})

let store = createStore(redusers)

window.store = store

export default store