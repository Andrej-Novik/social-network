import { getAuthData } from "./authReducer"

const SET_INITIALIZING = "SET_INITIALIZING"

let initialState = {
	initializing: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZING:
			 return {
				...state,
				initializing: true
			}
		default:
			return state
	} 
}

export let initializingSuccess = () => ({ type: SET_INITIALIZING})

export const initializeApp = () => {
	return (dispatch) => {
		let promise = dispatch(getAuthData())
		promise.then(() => {
			dispatch(initializingSuccess())
		})
	}
}

export default appReducer