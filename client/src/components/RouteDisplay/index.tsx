import React, {FunctionComponent} from 'react';

import {Route} from '../../api/models/Route';
import RouteSummary from './RouteSummary';
import {RouteStation} from './RouteStation';

const RouteDisplay: FunctionComponent<Route> = ({stations, cost}: Route): JSX.Element => {
	const start = stations.slice(0, 1)[0];
	const between = stations.slice(1, -1);
	const end = stations.slice(-1)[0];
	
	return(
		<div className="route-display">
			<RouteSummary cost={cost} time="0 min" transfer={0}/>
			<RouteStation mode="start" stationName={start.name}/>
			{between.map((station, i) => <RouteStation mode="middle" key={i} stationName={station.name}/>)}
			<RouteStation mode="end" stationName={end.name}/>
		</div>
	);
};

export default RouteDisplay;
