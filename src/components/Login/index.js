import styles from "./styles.module.scss"
import React from 'react';
import LoginForm from "./LoginForm"
import { connect } from "react-redux"
import {login} from "../../redux/authReducer"
import { Redirect } from "react-router";

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, props.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to="/profile" />
	}

	return (
		<div>
      	<h2>Login</h2>
			<LoginForm onSubmit={ onSubmit }/>
		</div>
	)
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);