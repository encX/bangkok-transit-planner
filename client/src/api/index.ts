import {Route} from './models/Route';
import {Station} from './models/Station';

export async function getAllStations(): Promise<Station[]> {
	return [
		{id: 1, name: 'กำแพงเพชร'},
		{id: 2, name: 'สวนจตุจักร'},
		{id: 3, name: 'พหลโยธิน'},
		{id: 4, name: 'ลาดพร้าว'},
		{id: 5, name: 'บางซื่อ'},
	];
}

export async function getRoutes(from: number, to: number): Promise<Route[]> {
	console.log('from', from, 'to', to);
	
	return [
		{
			cost: 45,
			stations: [
				{id: 3, name: 'พหลโยธิน'},
				{id: 4, name: 'ลาดพร้าว'},
				{id: 5, name: 'บางซื่อ'},
			],
		},
		{
			cost: 56,
			stations: [
				{id: 1, name: 'กำแพงเพชร'},
				{id: 2, name: 'สวนจตุจักร'},
				{id: 3, name: 'พหลโยธิน'},
			],
		},
	];
}
