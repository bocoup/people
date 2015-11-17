import React, { Component } from "react"; // eslint-disable-line no-unused-vars

class Search extends Component {
	constructor() {
		super();

		this.state = {
			entries: {}
		};
	}

	componentWillMount() {
		this.setState( {
			entries: this.props.profiles
		} );
	}

	get valueChange() {
		return event => this.props.searchProfiles( event.target.value );
	}

	render() {
		return (
			<div>
				<input name="q" onChange={ this.valueChange } value={ this.props.query } />
			</div>
		);
	}

	static get propTypes() {
		return {
			profiles: React.PropTypes.object,
			searchProfiles: React.PropTypes.func,
			query: React.PropTypes.string
		};
	}
}

export default Search;
