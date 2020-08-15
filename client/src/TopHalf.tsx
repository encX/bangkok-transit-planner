import {AutoComplete, Button, Col, Row} from 'antd';
import React, {useState} from 'react';

import {AutoCompleteValue} from './models/AutoCompleteValue';
import {Station} from './models/Station';

import 'antd/dist/antd.css';
import './css/style.scss';

interface TopHalfProps {
	stations: Station[],
}

function toAutoCompleteValue({name}: Station): AutoCompleteValue {
	return {value: name};
}

function TopHalf({stations}: TopHalfProps): JSX.Element {
	
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	
	const mappedStations = stations.map(toAutoCompleteValue);
	
	const [filteredOrigin, setFilteredOrigin] = useState<AutoCompleteValue[]>(mappedStations);
	const [filteredDestination, setFilteredDestination] = useState<AutoCompleteValue[]>(mappedStations);
	
	const onSearchOrigin = (searchText: string): void => {
		const filteredStations = filterStations(searchText);
		setFilteredOrigin(filteredStations);
	};
	const onSearchDestination = (searchText: string): void => {
		const filteredStations = filterStations(searchText);
		setFilteredDestination(filteredStations);
	};
	
	const onSelectOrigin = (data: string): void => {
		const filteredStations = filterStations(data);
		setFilteredOrigin(filteredStations);
	};
	const onSelectDestination = (data: string): void => {
		const filteredStations = filterStations(data);
		setFilteredDestination(filteredStations);
	};
	
	const onChangeOrigin = (data: string): void => {
		setOrigin(data);
	};
	
	const onChangeDestination = (data: string): void => {
		setDestination(data);
	};
	
	const filterStations = (searchText: string): AutoCompleteValue[] => {
		if (searchText === '') return stations.map(toAutoCompleteValue);
		return stations
			.filter(({name}) => name.includes(searchText))
			.map(toAutoCompleteValue);
	};
	
	return (
		<div className="top-half">
			<Row gutter={[48, 28]}>
				<Col xs={24} sm={24} md={12}>
					<AutoComplete
						value={origin}
						options={filteredOrigin}
						style={{width: '100%'}}
						onSelect={onSelectOrigin}
						onSearch={onSearchOrigin}
						onChange={onChangeOrigin}
						placeholder="From"
					/>
				</Col>
				<Col xs={24} sm={24} md={12}>
					<AutoComplete
						value={destination}
						options={filteredDestination}
						style={{width: '100%'}}
						onSelect={onSelectDestination}
						onSearch={onSearchDestination}
						onChange={onChangeDestination}
						placeholder="To"
					/>
				</Col>
			</Row>
			<Row>
				<Col span={24}><Button type="primary" block>Go!</Button></Col>
			</Row>
		</div>
	);
}

export default TopHalf;
