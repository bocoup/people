import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Auth from "./Auth";
import autobind from "autobind-decorator";
import config from "../config.js";
import { Link } from "react-router";
import authRecord from "../util/auth-record";
import fetchEmployees from "../fetch/employees";
import List from "./List";

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

	employedChildren() {
		if ( !this.props.children ) {
			return;
		}

		return React.cloneElement( this.props.children, {
			employees: this.state.employees
		} );
	}

	render() {
		let view;

		if ( this.state.employees && !this.props.children ) {
			view = (
				<List employees={ this.state.employees } />
			);
		}

		return (
			<div>
				<h1><Link to="/">People @ Bocoup</Link></h1>
				<Auth
					token={ this.state.token }
					logIn={ this.logIn.bind( this ) }
					logOut={ this.logOut.bind( this ) }
				/>
				{ view }
			</div>
		);
	}
}

export default App;
