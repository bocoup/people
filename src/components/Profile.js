import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

class Profile extends Component {
	constructor() {
		super();
	}

	render() {
		let employee = this.props.employees[ 0 ];

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
