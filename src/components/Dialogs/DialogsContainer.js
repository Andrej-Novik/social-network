import {updateNewMessageTextCreator, sendMessageCreator} from "../../redux/dialogsReducer"
import Dialogs from "."
import { connect } from "react-redux"


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (message) => {
			dispatch(updateNewMessageTextCreator(message))
		 },
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer