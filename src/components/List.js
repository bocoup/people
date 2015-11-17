import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

class ListItem extends Component {
	render() {
		var profile = this.props.profile;
		return (
			<li>
				<div><Link to={ `/profile/${ profile.slug }` }>{ profile.name }</Link></div>
				<div>Email: { profile.email }</div>
				<div>Github user: { profile.github_user }</div>
				<div>Website: { profile.website }</div>
				<div>Twitter: { profile.twitter }</div>
				<div>IRC: { profile.irc }</div>
			</li>
		);
	}

	static get propTypes() {
		return {
			profile: React.PropTypes.object
		};
	}
}

class List extends Component {

	updateProfiles() {
		let profiles = this.props.profiles;

		if ( profiles.map ) {
			this.profiles = profiles.map( person => person );
		}
	}

	componentWillUpdate() {
		this.updateProfiles();
	}

	componentWillMount() {
		this.updateProfiles();
	}

	getProfilesList() {
		let profiles = this.props.profiles;
		let profilesList = [];

		if ( profiles.map ) {
			profilesList = profiles.map( person => (
				<ListItem profile={ person } key={ person.id } />
			) );
		}

		return profilesList;
	}

	render() {
		return (
			<ul>
				{this.getProfilesList()}
			</ul>
		);
	}

	static get propTypes() {
		return {
			profiles: React.PropTypes.object
		};
	}
}

export default List;
