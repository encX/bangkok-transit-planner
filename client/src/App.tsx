import React, {useState, useEffect} from 'react';
import {getAllStations} from './api';
import {Station} from './models/Station';
import TopHalf from './TopHalf';

import 'antd/dist/antd.css';
import './css/style.scss';

function App(): JSX.Element {
	const [stations, setStations] = useState<Station[]>([]);
	useEffect(() => {
		getAllStations().then(setStations);
	}, []);
	return (
		// todo: loading blocker
		<div className="App base-component">
			{stations.length && <TopHalf stations={stations} />}
		</div>
	);
}

export default App;
