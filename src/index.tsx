import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routers';

import './css/style.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Routes />,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
