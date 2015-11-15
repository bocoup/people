import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Auth from "./Auth";
import autobind from "autobind-decorator";
import config from "../config.js";
import { Link } from "react-router";
import authRecord from "../util/auth-record";

@autobind
class App extends Component {
	constructor() {
		super();

		let { token, uid } = authRecord.get();

		this.state = {
			token,
			uid
		};
	}

	setAuth( data ) {
		authRecord.set( data );
		this.setState( data );
		this.props.history.replaceState( this.props.location );
	}

	logOut() {
		authRecord.clear();
		this.setState( {
			token: "",
			uid: ""
		} );
		window.location = "/";
	}

	logIn() {
		window.location = config.authProvider;
	}

	componentWillMount() {
		let query = this.props.location.query;

		if ( !this.state.token && query.hasOwnProperty( "access_token" ) ) {
			this.setAuth( {
				token: query.access_token,
				uid: query.id
			} );
		}
	}

	render() {
		return (
			<div>
				<h1><Link to="/">Hello, World!</Link></h1>
				<Auth
					token={ this.state.token }
					logIn={ this.logIn.bind( this ) }
					logOut={ this.logOut.bind( this ) }
				/>
				<Link to="/about">About</Link>
				{this.props.children}
			</div>
		);
	}
}

export default App;
