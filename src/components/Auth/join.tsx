import * as React from 'react';
import SocialButtons from './socialbuttons';
import {Link} from 'react-router-dom';

interface IJoin {
	user: {
		email: string;
		password: string;
		passwordConfirm: string;
	},
	errorMessage: string;
	success: boolean,
};

class Join extends React.Component<{}, IJoin> {
	constructor(props:any) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);

		this.state = {
			user: {
				email: '',
				password: '',
				passwordConfirm: '',
			},
			errorMessage: '',
			success: false,
		}
	}
	public handleChange() {
		console.log('handleChange');
	}
	public submit() {
		console.log('submit');
	}
	public render() {
		return (
			<div className="col-lg-8 offset-lg-2">
				<div className="card">
					<div className="card-body">
						<h3 className="auth__title card-title">Create an Account</h3>

						<SocialButtons />

						<hr/>

						<form onSubmit={this.submit}>
							<div className="form-group">
								<input type="email" required className="form-control" onChange={this.handleChange} name="email" value={this.state.user.email} placeholder="Email Address" />
							</div>
							<div className="form-group">
								<input type="password" required className="form-control" onChange={this.handleChange} name="password" value={this.state.user.password} placeholder="Password" />
							</div>
							<div className="form-group">
								<input type="password" required className="form-control" onChange={this.handleChange} name="passwordConfirm" value={this.state.user.passwordConfirm}placeholder="Confirm Password" />
							</div>

							<div className="form-group">
								<button type="submit" className="btn btn-success">Create an account</button>
							</div>
						</form>

						{
							this.state.errorMessage ? <div className="alert alert-danger">{this.state.errorMessage}</div> : null
						}

						{
							this.state.success ? <div className="alert alert-success">Registration Successful, please confirm your email address.</div> : null
						}
					</div>
				</div>
				<div className="text-center">
					<span className="auth__small__text">Already have account?</span>&nbsp;
					<Link to="/login">Log in</Link>
				</div>
			</div>
		)
	}
}

export default Join;
