import React, { Component } from "react";
import { Layout } from "antd";
import AppMenu from "./AppMenu";
import WinesTable from "./WinesTable";
import AddWineButton from "./AddWineButton";

const { Header, Content, Footer, Sider } = Layout;

class AppLayout extends Component {
	state = {
		collapsed: false,
	};

	render() {
		return (
			<Layout>
				<Sider>
					<AppMenu />
				</Sider>
				<Layout>
					<Header />
					<Content>
						<WinesTable />
					</Content>
					<Footer>
						<AddWineButton />
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default AppLayout;
