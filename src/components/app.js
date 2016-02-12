import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import AuthStatus from "./auth-status";

// Data is being fetched from the employees model
import fetchProfiles from "../requests/employees";

class App extends Component {
	constructor() {
		super();

		this.state = {
			profiles: false
		};
	}

	componentWillMount() {
		this.updateComponent();
		this.fetchProfiles();
	}

	componentWillReceiveProps() {
		this.fetchProfiles();
	}

	fetchProfiles() {
		if ( !this.state.profiles ) {
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
			return profiles.find( "slug", slug );
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
			profiles: this.filterProfiles(),
			uid: this.state.uid
		} );
	}

	render() {
		return (
			<div className="container">
				<h1><Link to="/">People @ Bocoup</Link></h1>
				<AuthStatus />
				{ this.populateChildren() }
			</div>
		);
	}
}

export default App;
