import React, { useState } from 'react';
import { Row, Col, Input, Button, AutoComplete  } from 'antd';
import 'antd/dist/antd.css';
import './css/style.scss';


const allStations = [
	{value:"บางซื่อ"},
	{value:"กำแพงเพชร"},
	{value:"สวนจตุจักร"},
	{value:"พหลโยธิน"},
	{value:"ลาดพร้าว"}
];

function App(): JSX.Element {
	
	const [origin		, setOrigin] 	  = useState('');
	const [destination	, setDestination] = useState('');

	const [filteredOrigin		, setFilteredOrigin]      = useState<{ value: string }[]>(allStations);
	const [filteredDestination	, setFilteredDestination] = useState<{ value: string }[]>(allStations);

	const onSearchOrigin = (searchText: string) => {
		let filterdStations = filterStations(searchText);
		setFilteredOrigin(filterdStations);
	};
	const onSearchDestination = (searchText: string) => {
		let filterdStations = filterStations(searchText);
		setFilteredDestination(filterdStations);
	};

	const onSelectOrigin = (data: string) => {
		let filterdStations = filterStations(data);
		setFilteredOrigin(filterdStations);
	};
	const onSelectDestination = (data: string) => {
		let filterdStations = filterStations(data);
		setFilteredDestination(filterdStations);
	};


	const onChangeOrigin = (data: string) => {
	  	setOrigin(data);
	};

	const onChangeDestination = (data: string) => {
		setDestination(data);
	};
	  

	const filterStations = ( searchText: string ) => {

		let filterdStations = allStations

		if( searchText !== "" ){

			filterdStations = allStations.filter( ( value ) => {
				return value.value.includes(searchText) === true
			});	

		}
		
		return filterdStations;

	}

	return (
		<div className="App base-component">
			<Row gutter={[48, 28]}>
				<Col xs={24} sm={24} md={12}>
					<AutoComplete
						value={origin}
						options={filteredOrigin}
						style={{ width: "100%" }}
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
						style={{ width: "100%" }}
						onSelect={onSelectDestination}
						onSearch={onSearchDestination}
						onChange={onChangeDestination}
						placeholder="To"
					/>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Button type="primary" block>
						Go!
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default App;
