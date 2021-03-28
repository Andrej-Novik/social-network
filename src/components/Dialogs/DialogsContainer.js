import {updateNewMessageText, sendMessage} from "../../redux/dialogsReducer"
import Dialogs from "."
import { connect } from "react-redux"

let mapStateToProps = (state) => ({
	dialogsPage: state.dialogsPage,
	isAuth: state.auth.isAuth
})

const DialogsContainer = connect(mapStateToProps, {
	updateNewMessageText,
	sendMessage

}) (Dialogs)

export default DialogsContainer