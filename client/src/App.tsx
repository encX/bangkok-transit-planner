import React from 'react';
import {Row, Col, Input, Button} from 'antd';

import 'antd/dist/antd.css';

function App(): JSX.Element {
	return (
		<div className="App">
			<Row>
				<Col span={12}>
					<Input placeholder="From" />
				</Col>
				<Col span={12}>
					<Input placeholder="To" />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Button type="primary" block>
						Go!
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default App;
