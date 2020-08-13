import React from 'react';
import TopHalf from './TopHalf';
import 'antd/dist/antd.css';
import './css/style.scss';

const allStations = [
	{value: 'บางซื่อ'},
	{value: 'กำแพงเพชร'},
	{value: 'สวนจตุจักร'},
	{value: 'พหลโยธิน'},
	{value: 'ลาดพร้าว'},
];

function App(): JSX.Element {

	return (
		<div className="App base-component">
			<TopHalf allStations={allStations} />
		</div>
	);
}

export default App;
