import React, { Component } from "react";
import { Row, Col, Form, Icon, Input, Button } from "antd";

const { Item } = Form;

interface SignInProps {
	username: String;
	password: any;
	history: any;
}

class SignIn extends Component<SignInProps> {
	state = {
		username: "",
		password: "",
	};

	usernameChange = (e: any) => {
		this.setState({
			username: e.target.value,
		});
	};

	passwordChange = (e: any) => {
		this.setState({
			password: e.target.value,
		});
	};

	handleSubmit = () => {
		const { history } = this.props;
		console.log("LOGIN", this.state);
		history.push("/home");
	};

	render() {
		const { username, password } = this.state;

		return (
			<React.Fragment>
				<Row style={{ height: 100, backgroundColor: "black" }} />
				<Row style={{ marginTop: 25 }}>
					<Col span={8} />
					<Col span={8}>
						<Form
							onSubmit={this.handleSubmit}
							className="login-form"
						>
							<Item>
								<Input
									prefix={
										<Icon
											type="user"
											style={{ color: "rgba(0,0,0,.25)" }}
										/>
									}
									placeholder="Username"
									value={username}
									onChange={this.usernameChange}
								/>
							</Item>
							<Item>
								<Input
									prefix={
										<Icon
											type="lock"
											style={{ color: "rgba(0,0,0,.25)" }}
										/>
									}
									type="password"
									placeholder="Password"
									value={password}
									onChange={this.passwordChange}
								/>
							</Item>
							<Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
								>
									Log in
								</Button>
							</Item>
						</Form>
					</Col>
					<Col span={8} />
				</Row>
			</React.Fragment>
		);
	}
}

export default SignIn;
