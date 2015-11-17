import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

class Profile extends Component {
	constructor() {
		super();
	}

	render() {
		let profile = this.props.profiles[ 0 ];

		return (
			<div>
				<h1>{ profile.name }</h1>

				<div>Email: { profile.email }</div>
				<div>Github user: { profile.github_user }</div>
				<div>Website: { profile.website }</div>
				<div>Twitter: { profile.twitter }</div>
				<div>IRC: { profile.irc }</div>

				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default Profile;
