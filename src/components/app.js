import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Auth from "./auth";
import config from "../config.js";
import { Link } from "react-router";
import authRecord from "../util/auth-record";

// Data is being fetched from the employees model
import fetchProfiles from "../requests/employees";

class App extends Component {
	constructor() {
		super();

		let { token, uid } = authRecord.get();

		this.state = {
			token,
			uid,
			profiles: false
		};
	}

	setAuth( data ) {
		authRecord.set( data );
		this.setState( data );

		this.props.history.replaceState(
			this.props.location,
			this.props.location.pathname
		);
	}

	logOut() {
		authRecord.clear();
		this.setState( {
			token: "",
			uid: "",
			profiles: false
		} );
		window.location = "/";
	}

	logIn() {
		window.location = config.authProvider;
	}

	componentWillMount() {
		this.updateComponent();
		this.fetchProfiles();
	}

	componentWillReceiveProps() {
		this.fetchProfiles();
	}

	updateComponent() {
		let query = this.props.location.query;

		if ( !this.state.token && query.hasOwnProperty( "access_token" ) ) {
			this.setAuth( {
				token: query.access_token,
				uid: query.id
			} );
		}
	}

	fetchProfiles() {
		if ( this.state.token && !this.state.profiles ) {
			fetchProfiles(
				profiles => this.setState( { profiles } ),
				error => {
					console.warn( error ); // eslint-disable-line no-console
					alert( "Error fetching the app data!" );
					this.logOut();
				} );
		}
	}

	// Filter the profiles on a given slug parameter
	filterProfiles() {
		let profiles = this.state.profiles;
		let slug = this.props.params.slug;

		if ( slug ) {
			return profiles.filter( emp =>
				( emp.slug === slug )
			);
		} else {
			return profiles;
		}
	}

	// Populate the children component with the profiles
	// Cannot populate children from the Router
	populateChildren() {
		if ( !this.state.profiles ) {
			return null;
		}

		return React.cloneElement( this.props.children, {
			profiles: this.filterProfiles()
		} );
	}

	render() {
		return (
			<div className="container">
				<h1><Link to="/">People @ Bocoup</Link></h1>
				<Auth
					token={ this.state.token }
					logIn={ this.logIn.bind( this ) }
					logOut={ this.logOut.bind( this ) }
				/>
				{ this.populateChildren() }
			</div>
		);
	}
}

export default App;
