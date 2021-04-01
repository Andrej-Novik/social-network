import { Field, reduxForm } from "redux-form";
import Input from "../../common/FormsControls/Input"
import { required } from "../../../redux/utils/validators";
import styles from "./styles.module.scss"

const LoginForm = (props) => {
   return (
      <form className={styles.form} onSubmit={props.handleSubmit}>
         <div className={styles.input}>
				<Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
         </div>
         <div className={styles.input}>
            <Field placeholder={"Password"} name={"password"} type="password" component={Input} validate={[required]}/>
         </div>
         <div className={styles.checkbox}>
				<Field component={Input} name={"rememberMe"} type={"checkbox"} />
				<span className={styles.remember}>remember me</span>
			</div>
			{ props.error && <span className={styles.formSummaryError}>
				{props.error}
			</span>}
         <div className={styles.button}>
            <button>Login</button>
         </div>
      </form>
   )
}
export default reduxForm({form: 'login'})(LoginForm)