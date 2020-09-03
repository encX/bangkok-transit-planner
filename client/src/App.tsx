import React, {useState, useEffect} from 'react';

import {getAllStations, getRoutes} from './api';
import {Route} from './api/models/Route';
import {Station} from './api/models/Station';
import {RoutesPanel} from './sections/RoutesPanel';
import SearchPanel from './sections/SearchPanel';

import 'antd/dist/antd.css';
import './css/App.scss';

function App(): JSX.Element {
	const [stations, setStations] = useState<Station[]>([]);
	const [routes, setRoutes] = useState<Route[]>([]);
	
	useEffect(() => {
		getAllStations().then(setStations);
		getRoutes(2, 4).then(setRoutes);
	}, []);
	return (
		// todo: loading blocker
		<div className="App">
			<SearchPanel stations={stations} />
			<RoutesPanel routes={routes}/>
		</div>
	);
}

export default App;
