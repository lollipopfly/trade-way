import * as React from 'react';

class SocialButtons extends React.Component {
	public googleSignIn() {
		// console.log('google');
	}
	public facebookSignIn() {
		// console.log('facebook');
	}
	public render() {
		return (
			<div>
				<div className="row social__buttons">
					<div className="col-md-6 auth__btn__block">
						<button onClick={this.facebookSignIn}
										className="auth__btn btn btn-primary btn-lg btn-facebook btn-block">
							<i className="fa fa-facebook" />
							Sign in with Facebook
						</button>
					</div>
					<div className="col-md-6 auth__btn__block">
						<button onClick={this.googleSignIn}
										className="auth__btn btn btn-primary btn-lg btn-google btn-block">
							<i className="fa fa-google-plus" />
							Sign in with Google
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SocialButtons;
