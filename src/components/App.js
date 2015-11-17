import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Auth from "./Auth";
import autobind from "autobind-decorator";
import config from "../config.js";
import { Link } from "react-router";
import authRecord from "../util/auth-record";
import fetchEmployees from "../fetch/employees";

@autobind
class App extends Component {
	constructor() {
		super();

		let { token, uid } = authRecord.get();

		this.state = {
			token,
			uid,
			employees: false
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
			uid: "",
			employees: false
		} );
		window.location = "/";
	}

	logIn() {
		window.location = config.authProvider;
	}

	componentWillMount() {
		this.updateComponent();
		this.fetchEmployees();
	}

	componentWillReceiveProps() {
		this.fetchEmployees();
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

	fetchEmployees() {
		if ( this.state.token && !this.state.employees ) {
			fetchEmployees( employees => this.setState( { employees } ) );
		}
	}

	// Filter the profiles on a given slug parameter
	filterProfiles() {
		const employees = this.state.employees;
		const slug = this.props.params.slug;
		let filtered;

		if ( slug ) {
			filtered = employees.filter( emp =>
				( emp.slug === slug )
			);
		} else {
			filtered = employees;
		}

		return filtered;
	}

	employedChildren() {
		if ( !this.state.employees ) {
			return null;
		}

		return React.cloneElement( this.props.children, {
			employees: this.filterProfiles()
		} );
	}

	render() {
		return (
			<div>
				<h1><Link to="/">People @ Bocoup</Link></h1>
				<Auth
					token={ this.state.token }
					logIn={ this.logIn.bind( this ) }
					logOut={ this.logOut.bind( this ) }
				/>
				{ this.employedChildren() }
			</div>
		);
	}
}

export default App;
