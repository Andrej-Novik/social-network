import styles from "./styles.module.scss"
import React from 'react';
import LoginForm from "./LoginForm"

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData)
	}
	return (
		<div>
      	<h2>Login</h2>
			<LoginForm onSubmit={ onSubmit }/>
		</div>
	)
}

export default Login;