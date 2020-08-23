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
			<Col flex="100px"><div className="row-summary-item--name">{name}</div></Col>
			<Col flex="1"><div className="row-summary-item--value">{value}</div></Col>
			{flag && <Col flex="100px"><div className="row-summary-item--flag">{flag}</div></Col>}
		</Row>
	);
};
