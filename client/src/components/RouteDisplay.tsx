import React, {FunctionComponent} from 'react';

import {Route} from '../api/models/Route';

export const RouteDisplay: FunctionComponent<Route> = ({stations, cost}: Route): JSX.Element => {
	return (
		<div className="route-display">
			<p>Price {cost}฿</p>
			<p>{stations.map(station => station.name).join(' -> ')}</p>
		</div>
	);
};
