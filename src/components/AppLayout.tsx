import React, { Component } from "react";
import { Layout } from "antd";
import AppMenu from "./AppMenu";

const { Header, Sider, Content, Footer } = Layout;

class AppLayout extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Sider>
					<AppMenu />
				</Sider>
				<Content />
				<Footer />
			</React.Fragment>
		);
	}
}

export default AppLayout;
