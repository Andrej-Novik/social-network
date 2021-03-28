import { usersAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
	posts: [
		{ id: 1, text: "post 1", likes: 23 },
		{id: 2, text: "post 2", likes: 13}
	],
	newPostText: "",
	profile: null
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
				return {
					...state,
					posts: [...state.posts, {
						id: Date.now(),
						text: state.newPostText,
						likes: 0
					}],
					newPostText: ""
				}
		
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.text
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state
	}
}

export let addPost = () => ({type: ADD_POST})
export let updateNewPostText = (text) =>({type: UPDATE_NEW_POST_TEXT, text})
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export const getUsersProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
		.then(response => {
			 dispatch(setUserProfile(response.data))
		});
	}
}

export default profileReducer