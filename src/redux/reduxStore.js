import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducers from "./usersReducers"
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";


let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducers,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware))

window.store = store

export default store