import {Button, Col, Row} from 'antd';
import React, {useState} from 'react';

import {getRoutes} from './api';
import {StationSelect} from './components/StationSelect';
import {Station} from './models/Station';

interface TopHalfProps {
	stations: Station[],
}

function TopHalf({stations}: TopHalfProps): JSX.Element {
	const [from, setFrom] = useState<number>();
	const [to, setTo] = useState<number>();
	
	const onGo = (): void => {
		from && to && getRoutes(from, to);
	};
	
	return (
		<div className="top-half">
			<Row gutter={[48, 28]}>
				<Col xs={24} sm={24} md={12}>
					<StationSelect onChange={setFrom} stations={stations} placeholder="From"/>
				</Col>
				<Col xs={24} sm={24} md={12}>
					<StationSelect onChange={setTo} stations={stations} placeholder="To"/>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Button type="primary" disabled={!from || !to} onClick={onGo} block>Go!</Button>
				</Col>
			</Row>
		</div>
	);
}

export default TopHalf;
