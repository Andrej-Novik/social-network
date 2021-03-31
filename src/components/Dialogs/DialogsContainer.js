import { sendMessage} from "../../redux/dialogsReducer"
import Dialogs from "."
import { connect } from "react-redux"
import { withAuthRedirect } from "../../hoc/AuthRedirect"
import { compose } from "redux"

let mapStateToProps = (state) => ({
	dialogsPage: state.dialogsPage,
})

export default compose(
	connect(mapStateToProps, {
		sendMessage
	}),
	withAuthRedirect
)(Dialogs)
