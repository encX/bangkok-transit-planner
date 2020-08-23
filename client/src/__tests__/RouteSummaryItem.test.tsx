import React from 'react';
import {shallow} from 'enzyme';
import {RouteSummaryItem} from '../components/RouteDisplay/RouteSummary/RouteSummaryItem';


describe('RouteSummaryItem', function() {
	it('only required props: renders correctly', () => {
		const tree = shallow(<RouteSummaryItem name="name" value="value"/>);
		expect(tree).toMatchSnapshot();
	});
	
	it('with optional props: renders correctly', () => {
		const tree = shallow(<RouteSummaryItem name="name" value="value" flag="flag" color="#ABCABC"/>);
		expect(tree).toMatchSnapshot();
	});
});
