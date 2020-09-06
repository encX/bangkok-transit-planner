import {Button, Col, Row} from 'antd';
import React, {useState} from 'react';

import {getRoutes} from '../api';
import {StationSelect} from '../components/StationSelect';
import {Station} from '../api/models/Station';
import {ROW_GUTTER} from '../constants';

interface TopHalfProps {
	stations: Station[],
}

function SearchPanel({stations}: TopHalfProps): JSX.Element {
	const [from, setFrom] = useState<number>();
	const [to, setTo] = useState<number>();
	
	const onGo = (): void => {
		from && to && getRoutes(from, to);
	};
	
	return (
		<Row gutter={ROW_GUTTER}>
			<Col xs={24} sm={24} md={12}>
				<StationSelect id="origin-selector" onChange={setFrom} stations={stations} placeholder="From"/>
			</Col>
			<Col xs={24} sm={24} md={12}>
				<StationSelect id="destination-selector" onChange={setTo} stations={stations} placeholder="To"/>
			</Col>
			<Col span={24}>
				<Button id="get-routes-button" type="primary" disabled={!from || !to} onClick={onGo} block>Go!</Button>
			</Col>
		</Row>
	);
}

export default SearchPanel;
