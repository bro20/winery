import React, { Component } from "react";
import { Modal } from "antd";

interface AddWineModalProps {
	visible: boolean;
}

class AddWineModal extends Component<AddWineModalProps> {
	handleOk = (e: any) => {
		console.log(e);
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	render() {
		const { visible } = this.props;

		return (
			<Modal
				title="Add wine modal"
				visible={visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			/>
		);
	}
}

export default AddWineModal;
