import React, { Component } from "react";
import { Menu } from "antd";
import AddWineModal from "./AddWineModal";

const { Item } = Menu;

interface AppMenuProps {
	history: any;
}

class AppMenu extends Component<AppMenuProps> {
	state = {
		visible: false,
	};

	onItemClick = (e: any) => {
		const { history } = this.props;

		if (e.key == 1) {
			history.push("/wines");
		} else if (e.key == 2) {
			this.setState({ visible: true });
		}
	};

	render() {
		const { visible } = this.state;

		return (
			<Menu mode="inline" theme="dark" onClick={this.onItemClick}>
				<Item key="1">Search</Item>
				<Item key="2">Add</Item>
				{/*<AddWineModal visible />*/}
			</Menu>
		);
	}
}

export default AppMenu;
