import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

class Profile extends Component {
	constructor() {
		super();

		this.state = {
			employee: {}
		};
	}

	componentWillMount() {
		let employee = this.props.employees.filter( emp =>
			( emp.id === this.props.params.id )
		)[ 0 ];

		this.setState( { employee } );
	}

	render() {
		let employee = this.state.employee;

		return (
			<div>
				<h1>{ employee.name }</h1>

				<div>Email: { employee.email }</div>
				<div>Github user: { employee.github_user }</div>
				<div>Website: { employee.website }</div>
				<div>Twitter: { employee.twitter }</div>
				<div>IRC: { employee.irc }</div>

				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default Profile;
