import {Col, Row} from 'antd';
import React, {FunctionComponent} from 'react';
import {StationCanvas} from './StationCanvas';

interface RouteStationProps {
	mode: 'start' | 'middle' | 'end';
	stationName: string;
}

export const RouteStation: FunctionComponent<RouteStationProps> = ({mode, stationName}): JSX.Element => {
	return (
		<Row gutter={[16, 0]}>
			<Col flex="80px">11:11am</Col>
			<Col flex="40px"><StationCanvas mode={mode} /></Col>
			<Col flex="auto"><h1>{stationName}</h1></Col>
		</Row>
	);
};
