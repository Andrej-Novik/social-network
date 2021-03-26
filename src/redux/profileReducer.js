const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
	posts: [
		{ id: 1, text: "post 1", likes: 23 },
		{id: 2, text: "post 2", likes: 13}
	],
	newPostText: ""
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
		
		default:
			return state
	}
}

export let addPostCreator = () => ({type: ADD_POST})
export let updateNewPostTextCreator = (text) =>
({
	type: UPDATE_NEW_POST_TEXT,
	text: text
})

export default profileReducer