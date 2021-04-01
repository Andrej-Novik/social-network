import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../redux/utils/validators";
import Textarea from "../../common/FormsControls/Textarea"

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="newMessage" validate={[required, maxLength50]} component={Textarea} />
			<br />
			<button>Send</button>
		</form>
	)
}
export default reduxForm({form: "dialogAddMessage"})(AddMessageForm)