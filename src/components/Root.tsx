import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import App from "./App";

const Root = () => (
	<Router>
		<div>
			<Route path="/" exact component={SignIn} />
			<Route path="/home" component={App} />
		</div>
	</Router>
);

export default Root;
