import React, { Component } from "react";
import AppLayout from "./AppLayout";
import { Row, Col, Carousel, Card } from "antd";

import "./style/Carousel.scss";

const { Meta } = Card;

class Home extends Component {
	render() {
		return (
			<AppLayout>
				<Row gutter={16}>
					<Col span={8}>
						<Carousel>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
						</Carousel>
					</Col>
					<Col span={8}>
						<Carousel>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
						</Carousel>
					</Col>
					<Col span={8}>
						<Carousel>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
							<Card
								hoverable
								style={{ width: "100%" }}
								cover={
									<img
										alt="example"
										src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
									/>
								}
							>
								<Meta />
							</Card>
						</Carousel>
					</Col>
				</Row>
			</AppLayout>
		);
	}
}

export default Home;
