import * as React from "react";
import firebase from "../../helpers/firebase/firebase";
import SocialButtons from "./socialbuttons";
import { Link } from "react-router-dom";

interface IJoin {
	user: {
		email: string;
		password: string;
		passwordConfirm: string;
	};
	errorMessage: string;
	success: boolean;
}

class Join extends React.Component<{}, IJoin> {
	constructor(props: any) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);

		this.state = {
			user: {
				email: "",
				password: "",
				passwordConfirm: ""
			},
			errorMessage: "",
			success: false
		};
	}
	public handleChange(e: any): void {
		let value = e.target.value;
		let name = e.target.name;
		let user = this.state.user;

		user[name] = value;

		this.setState({
			user: user
		});
	}
	public submit(e: any): void | boolean {
		e.preventDefault();

		let self = this;
		let email = this.state.user.email;
		let password = this.state.user.password;
		let passwordConfirm = this.state.user.passwordConfirm;

		if (password !== passwordConfirm) {
			this.setState({
				errorMessage: "Passwords don't match"
			});

			return false;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response: any) => {
				// Send email for verification
				self.sendEmailVerification(response.user);
			})
			.catch((error: any) => {
				let errorMessage = error.message;

				self.setState({
					errorMessage: errorMessage
				});
			});
	}
	public sendEmailVerification(user: any): void {
		let self = this;

		user
			.sendEmailVerification()
			.then(() => {
				self.setState({
					errorMessage: "",
					success: true
				});
			})
			.catch((error: any) => {
				console.log(error);
			});
	}
	public render() {
		return (
			<div className="col-lg-8 offset-lg-2">
				<div className="card">
					<div className="card-body">
						<h3 className="auth__title card-title">Create an Account</h3>

						<SocialButtons />

						<hr />

						<form onSubmit={this.submit}>
							<div className="form-group">
								<input
									type="email"
									required
									className="form-control"
									onChange={this.handleChange}
									name="email"
									value={this.state.user.email}
									placeholder="Email Address"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									required
									className="form-control"
									onChange={this.handleChange}
									name="password"
									value={this.state.user.password}
									placeholder="Password"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									required
									className="form-control"
									onChange={this.handleChange}
									name="passwordConfirm"
									value={this.state.user.passwordConfirm}
									placeholder="Confirm Password"
								/>
							</div>

							<div className="form-group">
								<button type="submit" className="btn btn-success">
									Create an account
								</button>
							</div>
						</form>

						{this.state.errorMessage ? (
							<div className="alert alert-danger">
								{this.state.errorMessage}
							</div>
						) : null}

						{this.state.success ? (
							<div className="alert alert-success">
								Registration Successful, please confirm your email address.
							</div>
						) : null}
					</div>
				</div>
				<div className="text-center">
					<span className="auth__small__text">Already have account?</span>&nbsp;
					<Link to="/login">Log in</Link>
				</div>
			</div>
		);
	}
}

export default Join;
