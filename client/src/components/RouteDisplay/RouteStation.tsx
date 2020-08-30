import {Col, Row, Typography} from 'antd';
import React, {FunctionComponent} from 'react';
import {StationCanvas} from './StationCanvas';

import './RouteStation.scss';

const {Title} = Typography;

interface RouteStationProps {
	mode: 'start' | 'middle' | 'end';
	stationName: string;
}

export const RouteStation: FunctionComponent<RouteStationProps> = ({mode, stationName}): JSX.Element => {
	return (
		<Row gutter={[16, 0]}>
			<Col flex="90px"><div className="route-station--time">11:11 AM</div></Col>
			<Col flex="40px"><StationCanvas mode={mode} /></Col>
			<Col flex="auto"><Title>{stationName}</Title></Col>
		</Row>
	);
};
