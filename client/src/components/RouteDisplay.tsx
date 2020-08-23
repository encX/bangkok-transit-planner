import React, {FunctionComponent} from 'react';

import {Route} from '../api/models/Route';
import {RouteStation} from './RouteStation';

export const RouteDisplay: FunctionComponent<Route> = ({stations, cost}: Route): JSX.Element => {
	const start = stations.slice(0, 1)[0];
	const between = stations.slice(1, -1);
	const end = stations.slice(-1)[0];
	
	return(
		<div className="route-display">
			<p>Price {cost}฿</p>
			<RouteStation mode="start" stationName={start.name}/>
			{between.map((station, i) => <RouteStation mode="middle" key={i} stationName={station.name}/>)}
			<RouteStation mode="end" stationName={end.name}/>
		</div>
	);
};
