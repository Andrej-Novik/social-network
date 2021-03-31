import { Field, reduxForm } from "redux-form";
import Input from "../../common/FormsControls/Input"
import { required } from "../../../redux/utils/validators";
import styles from "./styles.module.scss"

const LoginForm = (props) => {
   return (
      <form className={styles.form} onSubmit={props.handleSubmit}>
         <div>
				<Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
         </div>
         <div>
            <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
         </div>
         <label>
				<Field component={Input} name={"rememberMe"} type={"checkbox"} validate={[required]} />
				<span>remember me</span>
         </label>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}
export default reduxForm({form: 'login'})(LoginForm)