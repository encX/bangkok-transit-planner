import React from 'react';
import {shallow} from 'enzyme';
import {StationCanvas} from '../components/RouteDisplay/StationCanvas';


describe('StationCanvas', () => {
	it('case "start": renders correctly', () => {
		const tree = shallow(<StationCanvas mode="start" color="#123123"/>);
		expect(tree).toMatchSnapshot();
	});
	
	it('case "middle": renders correctly', () => {
		const tree = shallow(<StationCanvas mode="middle" color="#123123"/>);
		expect(tree).toMatchSnapshot();
	});
	
	it('case "end": renders correctly', () => {
		const tree = shallow(<StationCanvas mode="end" color="#123123"/>);
		expect(tree).toMatchSnapshot();
	});
});
