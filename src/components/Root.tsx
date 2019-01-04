import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import App from "./App";
import Home from "./Home";
import WinesPage from "./WinesPage";

const Root = () => (
	<Router>
		<div>
			<Route path="/" exact component={App} />
			<Route path="/signin" component={SignIn} />
			<Route path="/home" component={Home} />
			<Route path="/wines" component={WinesPage} />
		</div>
	</Router>
);

export default Root;
