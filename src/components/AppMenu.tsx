import React, { Component } from "react";
import { Menu } from "antd";

const { Item } = Menu;

class AppMenu extends Component {
	state = {
		collapsed: false,
	};

	render() {
		return (
			<Menu mode="inline" theme="dark">
				<Item>Search</Item>
				<Item>Add</Item>
			</Menu>
		);
	}
}

export default AppMenu;
