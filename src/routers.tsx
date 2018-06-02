import * as React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import Login from './components/Auth/login';
import Join from './components/Auth/join';
import NotFound from './components/Notfound/notfound';

class Routers extends React.Component {
	public render() {
		return (
			<Router>
				<div>
					<br />
					<br />
					<br />
					<main className="container">
						<div className="row">
							<Switch>
								<Route exact path="/login" component={Login} />
								<Route exact path="/join" component={Join} />

								{/*Always in bottom*/}
								<Route component={NotFound}/>
							</Switch>
						</div>
					</main>
				</div>
			</Router>
		)
	}
}

export default Routes;
