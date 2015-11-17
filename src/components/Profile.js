import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

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

	get github() {
		let view = null;
		let { github_user, github } = this.state.profile;

		if ( github_user ) {
			view = (
				<p>
					<a href={ github }>{ github_user } @ github</a>
				</p>
			);
		}

		return view;
	}

	get twitter() {
		let view = null;
		let { twitter, twitter_link } = this.state.profile;

		if ( twitter ) {
			view = (
				<p>
					<a href={ twitter_link }>{ twitter } @ twitter</a>
				</p>
			);
		}

		return view;
	}

	get website() {
		let view = null;
		let { website } = this.state.profile;

		if ( website ) {
			view = (
				<p>
					<a href={ website }>{ website }</a>
				</p>
			);
		}

		return view;
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

	get email() {
		let view = null;
		let { email } = this.state.profile;
		let emailLink = `mailto:${ email }`;

		if ( email ) {
			view = (
				<p>
					<a href={ emailLink }>{ email }</a>
				</p>
			);
		}

		return view;
	}

	get phone() {
		let view = null;
		let { phone } = this.state.profile;
		let phoneLink = `tel:${ phone }`;

		if ( phone ) {
			view = (
				<p>
					<a href={ phoneLink }>{ phone }</a>
				</p>
			);
		}

		return view;
	}

	render() {
		let profile = this.props.profiles[ 0 ];

		return (
			<div>
				<h1>{ profile.name }</h1>
				{ this.email }
				{ this.phone }
				{ this.github }
				{ this.twitter }
				{ this.website }
				{ this.irc }

				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default Profile;
