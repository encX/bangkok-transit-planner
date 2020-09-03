import React from 'react';
import {shallow} from 'enzyme';
import {RouteStation} from '../components/RouteDisplay/RouteStation';

describe('RouteStation', function() {
	it('case "start": renders correctly', () => {
		const tree = shallow(<RouteStation mode="start" stationName="station"/>);
		expect(tree).toMatchSnapshot();
	});
	
	it('case "middle": renders correctly', () => {
		const tree = shallow(<RouteStation mode="middle" stationName="station"/>);
		expect(tree).toMatchSnapshot();
	});
	
	it('case "end": renders correctly', () => {
		const tree = shallow(<RouteStation mode="end" stationName="station"/>);
		expect(tree).toMatchSnapshot();
	});
});
