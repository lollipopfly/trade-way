import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routers from './routers';

import './css/style.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Routers />,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
