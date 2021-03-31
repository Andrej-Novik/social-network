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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let message = action.newMessage
			return {
				...state,
				messages: [...state.messages, { id: Date.now(), message }]
			}
		default:
			return state
	}
}

export let sendMessage = (newMessage) => ({type: SEND_MESSAGE, newMessage})

export default dialogsReducer