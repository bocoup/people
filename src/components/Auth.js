import React, { Component } from "react";

class Auth extends Component {
	messages() {
		return {
			in: (
				<button onClick={ this.goToAuth.bind( this ) }>Log In</button>
			),
			out: (
				<button>Log Out - { this.token }</button>
			)
		};
	}

	goToAuth( event ) {
		event.preventDefault();
		location.replace( this.props.authProvider );
	}

	render() {
		var message = this.messages()[ this.props.token ? "out" : "in" ];

		return (
			<div>
				{ message }
			</div>
		);
	}
}

Auth.propTypes = {
	token: React.PropTypes.string,
	setToken: React.PropTypes.func,
	authProvider: React.PropTypes.string
};

export default Auth;
