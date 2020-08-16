import {Tabs} from 'antd';
import React, {FunctionComponent} from 'react';

import {Route} from '../api/models/Route';
import {RouteDisplay} from '../components/RouteDisplay';

interface RoutesPanelProps {
	routes: Route[];
}

export const RoutesPanel: FunctionComponent<RoutesPanelProps> = ({routes}): JSX.Element => {
	const routeToTab = (route: Route, i: number): JSX.Element =>
		<Tabs.TabPane key={i} tab={`Route ${i + 1}`}>
			<RouteDisplay {...route}/>
		</Tabs.TabPane>;
	
	return (
		<Tabs>
			{routes.map(routeToTab)}
		</Tabs>
	);
};
