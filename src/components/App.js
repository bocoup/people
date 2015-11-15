import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Auth from "./Auth";
import autobind from "autobind-decorator";
import config from "../config.js";
import { Link } from "react-router";

@autobind
class App extends Component {
	constructor() {
		super();

		this.state = {
			token: localStorage.getItem( "token" ),
			uid: localStorage.getItem( "uid" )
		};
	}

	setAuth( data ) {
		localStorage.setItem( "token", data.token );
		localStorage.setItem( "uid", data.uid );
		this.setState( data );
		this.props.history.pushState( this.props.location );
	}

	removeAuth() {
		localStorage.removeItem( "token" );
		localStorage.removeItem( "uid" );
		this.setState( {
			token: "",
			uid: ""
		} );
	}

	logIn() {
		location.replace( config.authProvider );
	}

	componentWillMount() {
		let query = this.props.location.query;

		if ( !this.state.token && query.hasOwnProperty( "access_token" ) ) {
			this.setAuth( {
				token: query.access_token,
				uid: query.id
			} );

			delete query.access_token;
			delete query.id;
		}
	}

	render() {
		return (
			<div>
				<h1><Link to="/">Hello, World!</Link></h1>
				<Auth
					token={ this.state.token }
					logIn={ this.logIn.bind( this ) }
					logOut={ this.removeAuth.bind( this ) }
				/>
				<Link to="/about">About</Link>
				{this.props.children}
			</div>
		);
	}
}

export default App;
