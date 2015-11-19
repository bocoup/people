import React, { Component } from "react";

class ProfileLink extends Component {
	constructor() {
		super();

		this.state = {
			href: "",
			content: ""
		};
	}

	resolveHref() {
		let { custom, href } = this.props;

		if ( custom && href ) {
			href = `${ custom }:${ href }`;
		}

		return href;
	}

	componentWillMount() {
		let { children } = this.props;
		let href = this.resolveHref();

		this.setState( {
			href,
			content: children || this.props.href
		} );
	}

	render() {
		let { href, content } = this.state;
		if ( !this.state.content ) {
			return null;
		}

		return (
			<a href={ href }>{ content }</a>
		);
	}

	static get propTypes() {
		return {
			href: React.PropTypes.string
		};
	}
}

export default ProfileLink;
