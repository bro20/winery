import React, { Component } from "react";
import { Menu } from "antd";

const { Item } = Menu;

class AppMenu extends Component {
	state = {
		collapsed: false,
	};

	render() {
		const { collapsed } = this.state;

		return (
			<React.Fragment>
				<Menu mode="inline" theme="dark" inlineCollapsed={collapsed}>
					<Item>Option1</Item>
					<Item>Option2</Item>
					<Item>Option3</Item>
				</Menu>
			</React.Fragment>
		);
	}
}

export default AppMenu;
