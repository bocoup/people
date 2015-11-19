import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import Gravatar from "react-gravatar";

class Profile extends Component {
	constructor() {
		super();

		this.state = {
			profile: {}
		};
	}

	componentWillMount() {
		this.setState( {
			profile: this.props.profiles[ 0 ]
		} );
	}

	get irc() {
		let view = null;
		let { irc } = this.state.profile;

		if ( irc ) {
			view = (
				<p>
					<code>{ irc }</code> @ freenode
				</p>
			);
		}

		return view;
	}

	render() {
		let profile = this.props.profiles[ 0 ];
		let {
			name,
			position_name,
			email,
			phone,
			website,
			github,
			github_user,
			twitter,
			twitter_link,
			irc
		} = profile;

		return (
			<div>
				<h1>{ name }</h1>
				<h2>{ position_name }</h2>
				<ProfileLink href={ `mailto:${ email }` }>{ email }</ProfileLink>
				<ProfileLink href={ `tel:${ phone }` }>{ phone }</ProfileLink>
				<ProfileLink>{ website }</ProfileLink>
				<ProfileLink href={ github }>{ github_user } @ github</ProfileLink>
				<ProfileLink href={ twitter_link }>{ twitter } @ twitter</ProfileLink>
				<ProfileItem>{ irc } on Freenode</ProfileItem>

				<ProfileItem>
					<Gravatar
						email={ profile.email }
						https={ location.protocol === "https:" }
					/>
				</ProfileItem>

				<Link to="/">Home</Link>
			</div>
		);
	}
}

class ProfileLink extends Component {
	render() {
		if ( !this.props.children ) {
			return null;
		}

		let { href = this.props.children } = this.props;

		return (
			<ProfileItem><a href={ href }>{ this.props.children }</a></ProfileItem>
		);
	}
}

class ProfileItem extends Component {
	render() {
		if ( !this.props.children ) {
			return null;
		}

		return (
			<p className="profile-item">
				{ this.props.children }
			</p>
		);
	}
}

export default Profile;
