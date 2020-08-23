import React, {FC} from 'react';
import {RouteSummaryItem} from './RouteSummaryItem';

interface RouteSummaryProps {
	cost: number;
	time: string;
	transfer: number;
}

const RouteSummary: FC<RouteSummaryProps> = ({cost, time, transfer}): JSX.Element => {
	return (
		<>
			<RouteSummaryItem name="Fare" value={`${cost} Baht`}/>
			<RouteSummaryItem name="Time" value={time}/>
			<RouteSummaryItem name="Transfer" value={`${transfer} times`}/>
		</>
	);
};

export default RouteSummary;
