import React from 'react';
import {Row, Col, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import './css/style.scss';

function App(): JSX.Element {
	return (
		<div className="App base-component">
			<Row gutter={[48, 28]}>
				<Col xs={24} sm={24} md={12}><Input placeholder="From" /></Col>
				<Col xs={24} sm={24} md={12}><Input placeholder="To" /></Col>
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
