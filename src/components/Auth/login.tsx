import * as React from 'react';
import SocialButtons from './socialbuttons';

interface IUser {
	user: {
		email: string;
		password: string;
	},
	errorMessage: string;
};

class Login extends React.Component<{}, IUser> {
	constructor(props:any) {
		super(props);

		this.state ={
			user: {
				email: '',
				password: ''
			},
			errorMessage: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	public submit() {
		console.log('submit');
	}
	public handleChange(e:any) {
		let value = e.target.value;
		let name = e.target.name;
		let user = this.state.user;

		user[name] = value;

		this.setState({
			user: user
		});
	}
	public render() {
		return (
			<div className="row">
				<div className="col-sm-8 offset-sm-2">
					<div className="card">
						<div className="card-body">
							<h3 className="auth__title card-title">Log in to Your Account</h3>

							<SocialButtons />

							<hr/>

							<form onSubmit={this.submit}>
								<div className="form-group">
									<input type="email" required={true} className="form-control" onChange={this.handleChange} name="email" value={this.state.user.email} placeholder="Email Address" />
								</div>

								<div className="form-group">
									<input type="password" required={true} className="form-control"
												 onChange={this.handleChange} name="password"
												 value={this.state.user.password} placeholder="Password"/>
								</div>

								<div className="form-group">
									<button type="submit" className="btn btn-success">Sign In
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;
