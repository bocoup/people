import React, { Component } from "react";

class AuthStatus extends Component {
	doLogIn( event ) {
		event.preventDefault();
		this.props.logIn();
	}

	doLogOut( event ) {
		event.preventDefault();
		this.props.logOut();
	}

	render() {
		let logout = <button onClick={ this.doLogOut.bind( this ) }>Log Out</button>;
		let login = <button onClick={ this.doLogIn.bind( this ) }>Log In</button>;
		let message = this.props.token ? logout : login;

		return (
			<div>
				{ message }
			</div>
		);
	}
}

AuthStatus.propTypes = {
	token: React.PropTypes.string,
	logIn: React.PropTypes.func,
	logOut: React.PropTypes.func
};

export default AuthStatus;
