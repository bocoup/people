import React, { Component } from "react";

class ProfileLink extends Component {
	resolveHref() {
		let { custom, href } = this.props;

		if ( custom && href ) {
			href = `${ custom }:${ href }`;
		}

		return href;
	}

	content() {
		return this.props.children || this.props.href;
	}

	render() {
		return (
			<a href={ this.resolveHref() }>{ this.content() }</a>
		);
	}

	static get propTypes() {
		return {
			href: React.PropTypes.string
		};
	}
}

export default ProfileLink;
