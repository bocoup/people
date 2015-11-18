import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Fuse from "fuse.js";

class Search extends Component {
	constructor() {
		super();

		this.state = {
			query: ""
		};
	}

	get valueChange() {
		return event => this.searchProfiles( event.target.value );
	}

	searchProfiles( query ) {
		let profiles = this.props.profiles;

		if ( query.trim() !== "" ) {
			let fuse = new Fuse( profiles, {
				keys: [
					"name",
					"email",
					"phone",
					"github_user"
				]
			} );
			profiles = fuse.search( query );
		}

		this.setState( {
			query
		} );

		this.props.setVisible( profiles );
	}

	render() {
		return (
			<div>
				<input name="q" onChange={ this.valueChange } value={ this.state.query } />
			</div>
		);
	}

	static get propTypes() {
		return {
			profiles: React.PropTypes.array,
			setVisible: React.PropTypes.func,
			query: React.PropTypes.string
		};
	}
}

export default Search;
