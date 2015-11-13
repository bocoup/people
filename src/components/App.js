import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Auth from "./Auth";
import autobind from "autobind-decorator";
import config from "../config.js";

@autobind
class App extends Component {
	constructor() {
		super();

		this.state = {
			token: ""
		};
	}

	setToken() {
		console.log( this );
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<Auth
					token={ this.state.token }
					setToken={ this.setToken }
					authProvider={ config.authProvider }
				/>
			</div>
		);
	}
}

export default App;
