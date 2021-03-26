const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
	dialogs: [
		{ id: 1, name: "Andrej" },
		{ id: 2, name: "Sasha" },
		{ id: 3, name: "Artem" }
	],
	messages: [
		{ id: 1, message: "Yo" },
		{ id: 2, message: "Hi" }
	],
	newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			 return {
				...state,
				newMessageText: action.message
			}
		case SEND_MESSAGE:
				return {
					...state,
					messages: [...state.messages, {
						id: Date.now(),
						message: state.newMessageText
					}],
					newMessageText: ""
				}
			
		
		default:
			return state
	}
}

export let sendMessageCreator = () => ({type: SEND_MESSAGE})
export let updateNewMessageTextCreator = (message) =>
({
	type: UPDATE_NEW_MESSAGE_TEXT,
	message: message
})

export default dialogsReducer