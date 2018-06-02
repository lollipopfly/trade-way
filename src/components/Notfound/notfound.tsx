import * as React from 'react';

class NotFound extends React.Component {
	constructor(props:any) {
		super(props);
	}
	public render() {
		return (
			<div>
				<div className="col-sm-12">
					<h1>404 not found...</h1>
				</div>
			</div>
		)
	}
}

export default NotFound;
