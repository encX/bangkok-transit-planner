import {AutoComplete, Button, Col, Row} from 'antd';
import React, {useState} from 'react';

import {Station} from './models/Station';

import 'antd/dist/antd.css';
import './css/style.scss';
import {StationAutoComplete} from './StationAutoComplete';

interface TopHalfProps {
	stations: Station[],
}

function TopHalf({stations}: TopHalfProps): JSX.Element {
	const [from, setFrom] = useState<number>();
	const [to, setTo] = useState<number>();
	
	return (
		<div className="top-half">
			<Row gutter={[48, 28]}>
				<Col xs={24} sm={24} md={12}>
					<StationAutoComplete onSelect={setFrom} stations={stations}/>
				</Col>
				<Col xs={24} sm={24} md={12}>
					<StationAutoComplete onSelect={setTo} stations={stations}/>
				</Col>
			</Row>
			<Row>
				<Col span={24}><Button type="primary" block>Go!</Button></Col>
			</Row>
		</div>
	);
}

export default TopHalf;
