import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
	posts: [
		{ id: 1, text: "post 1", likes: 23 },
		{id: 2, text: "post 2", likes: 13}
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let post = action.newPost
			return {
				...state,
				posts: [...state.posts, {
					id: Date.now(),
					text: post,
					likes: 0
				}],
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
		  }
		default:
			return state
	}
}

export const addPost = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUsersProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
		.then(response => {
			 dispatch(setUserProfile(response.data))
		});
	}
}
export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
		.then(response => {
			 dispatch(setStatus(response.data))
		});
	}
}
export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
			if(response.data.resultCode === 0)
			 dispatch(setStatus(status))
		});
	}
}

export default profileReducer