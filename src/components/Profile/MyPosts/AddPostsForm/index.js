import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required } from "../../../../redux/utils/validators";
import Textarea from "../../../common/FormsControls/Textarea"
import styles from "./styles.module.scss"

const maxLength10 = maxLengthCreator(10)

const AddPostsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={styles.addPosts}>
			<Field
				name="newPost"
				component={Textarea}
				validate={[required, maxLength10]}
			/>
			<br />
			<button>Add post</button>
		</form>
	)
}
export default reduxForm({form: 'addPostForm'})(AddPostsForm)
