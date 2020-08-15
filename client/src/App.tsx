import React from 'react';
import {Station} from './models/Station';
import TopHalf from './TopHalf';
import 'antd/dist/antd.css';
import './css/style.scss';

const stations: Station[] = [
	{id: 1, name: 'กำแพงเพชร'},
	{id: 2, name: 'สวนจตุจักร'},
	{id: 3, name: 'พหลโยธิน'},
	{id: 4, name: 'ลาดพร้าว'},
	{id: 5, name: 'บางซื่อ'},
];

function App(): JSX.Element {

	return (
		<div className="App base-component">
			<TopHalf stations={stations} />
		</div>
	);
}

export default App;
