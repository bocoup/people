import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

class ListItem extends Component {
	render() {
		let { slug, name, email, phone  } = this.props.profile;
		return (
			<li className="list-item">
				<div><Link to={ `/profile/${ slug }` }>{ name }</Link></div>
				<div>{ email }</div>
				<div>{ phone }</div>
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
			<ul className="profiles-list">
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
