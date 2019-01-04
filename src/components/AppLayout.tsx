import React, { Component } from "react";
import { Layout } from "antd";
import AppMenu from "./AppMenu";

import "./style/Content.scss";

const { Header, Sider, Content, Footer } = Layout;

class AppLayout extends Component {
	render() {
		const { children } = this.props;

		return (
			<React.Fragment>
				<Header />
				<Layout>
					<Sider>
						<AppMenu history />
					</Sider>
					<Content className="content">{children}</Content>
				</Layout>
				<Footer />
			</React.Fragment>
		);
	}
}

export default AppLayout;
