import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControl/FormsControl";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import s from './../common/FormsControl/FormsControl.module.css';
import { createField } from "../common/FormsControl/FormsControl";


const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField("Login", "email", [required], Input)}
			{createField("Password", "password", [required], Input, { type: "password" })}
			{createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

			{error && <div className={s.formSummaryError}>
				{error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
};


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);


const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}
	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return <div>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
};


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);