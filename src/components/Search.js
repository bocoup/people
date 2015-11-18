import React, { Component } from "react"; // eslint-disable-line no-unused-vars

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

	onlyStrings( ...items ) {
		return items.filter( item => typeof item === "string" );
	}

	isIncluded( query, items ) {
		return items.reduce( ( prev, item ) => {
			if ( prev ) {
				return true;
			}

			return Boolean(
				item.match(
					new RegExp( query.trim(), "gim" )
				)
			);
		}, false );
	}

	searchProfiles( query ) {
		let profiles = this.props.profiles;
		let visible = profiles.filter( profile => {
			let { name, email, phone } = profile;
			let strProps = this.onlyStrings( name, email, phone );

			if ( query.trim() === "" ) {
				return true;
			}

			return this.isIncluded( query, strProps );
		} );

		this.setState( {
			query
		} );

		this.props.setVisible( visible );
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
			profiles: React.PropTypes.object,
			setVisible: React.PropTypes.func,
			query: React.PropTypes.string
		};
	}
}

export default Search;
