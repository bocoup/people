import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import Fuse from "fuse.js";

class Search extends Component {
	constructor() {
		super();

		this.state = {
			query: "",
			fuse: false
		};
	}

	componentWillMount() {
		let fuse = new Fuse( this.props.profiles, {
			keys: [
				"name",
				"phone",
				"github_user"
			]
		} );

		this.setState( { fuse } );
	}

	get valueChange() {
		return event => this.searchProfiles( event.target.value );
	}

	searchProfiles( query ) {
		let profiles;

		if ( query.trim() !== "" ) {
			profiles = this.state.fuse.search( query );
		} else {
			profiles = this.props.profiles;
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
