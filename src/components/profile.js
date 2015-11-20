import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import Gravatar from "react-gravatar";
import Item from "./profile-item";
import ProfileEdit from "./profile-edit";
import ProfileLink from "./profile-link";

class Profile extends Component {
	constructor() {
		super();

		this.state = {
			profile: {}
		};
	}

	componentWillMount() {
		this.setState( {
			profile: this.props.profiles
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

	setChanges( key ) {
		return value => {
			let changes = {};
			changes[ key ] = value;

			return this.state.profile.save( changes, { patch: true } );
		};
	}

	render() {
		let profile = this.state.profile;
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
			irc,
			id
		} = profile;
		let isUser = id === this.props.uid;

		// Each Item represents a <p class="profile-item" /> and it will print
		// only if the provided children has contents
		//
		// The ProfileLinks will accept custom protocols and repeat the provided
		// href value as the text content if it has no children
		return (
			<div>
				<h1>{ name }</h1>
				<h2>{ position_name }</h2>

				<Item>
					<ProfileLink custom="mailto" href={ email } />
				</Item>

				<Item>
					<ProfileEdit
						value={ phone }
						canEdit={ isUser }
						onSave={ this.setChanges( "phone" ) }
					>
						<ProfileLink custom="tel" href={ phone } />
					</ProfileEdit>
				</Item>

				<Item>
					<ProfileLink href={ website } />
				</Item>

				<Item>
					<ProfileLink href={ github }>
						{ github_user } @ github
					</ProfileLink>
				</Item>

				<Item>
					<ProfileLink href={ twitter_link }>
						{ twitter } @ twitter
					</ProfileLink>
				</Item>

				<Item>{ irc } on Freenode</Item>

				<Item>
					<Gravatar
						email={ profile.email }
						https={ location.protocol === "https:" }
					/>
				</Item>

				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default Profile;
