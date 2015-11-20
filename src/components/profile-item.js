import React, { Component } from "react"; // eslint-disable-line no-unused-vars

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

export default ProfileItem;
