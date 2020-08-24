import React, {FC} from 'react';
import {Row, Col} from 'antd';

import './RouteSummaryItem.scss';

interface RouteSummaryItemProps {
	name: string;
	value: string;
	flag?: string;
	color?: string;
}

export const RouteSummaryItem: FC<RouteSummaryItemProps> = ({name, value, flag, color}): JSX.Element => {
	return (
		<Row gutter={[16, 8]}>
			<Col flex="100px"><div className="route-summary-item--name" style={{borderColor: color}}>{name}</div></Col>
			<Col flex="1"><div className="route-summary-item--value">{value}</div></Col>
			{flag && <Col flex="100px"><div className="route-summary-item--flag" style={{backgroundColor: color}}>{flag}</div></Col>}
		</Row>
	);
};
