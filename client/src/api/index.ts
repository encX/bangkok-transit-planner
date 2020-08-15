import {Station} from '../models/Station';

export async function getAllStations(): Promise<Station[]> {
	try {
		return [
			{id: 1, name: 'กำแพงเพชร'},
			{id: 2, name: 'สวนจตุจักร'},
			{id: 3, name: 'พหลโยธิน'},
			{id: 4, name: 'ลาดพร้าว'},
			{id: 5, name: 'บางซื่อ'},
		];
	} catch (e) {
		throw e;
	}
}

export async function getRoutes(from: number, to: number): Promise<void> {
	// todo
}
