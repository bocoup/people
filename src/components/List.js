import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import Search from "./search";

class ListItem extends Component {
	render() {
		let { slug, name, email, phone  } = this.props.person;
		return (
			<li className="list-item">
				<div><Link to={ `/profile/${ slug }` }>{ name }</Link></div>
				<div>{ email }</div>
				<div>{ phone }</div>
			</li>
		);
	}

	static get propTypes() {
		return {
			person: React.PropTypes.object
		};
	}
}

class List extends Component {
	constructor() {
		super();

		this.state = {
			visible: false,
			query: ""
		};
	}

	componentWillMount() {
		this.setState( {
			visible: this.props.profiles
		} );
	}

	getProfilesList() {
		let profiles = this.state.visible;
		let profilesList = [];

		if ( profiles.map ) {
			profilesList = profiles.map( person => (
				<ListItem person={ person } key={ person.id } />
			) );
		}

		return profilesList;
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
			visible,
			query
		} );
	}

	render() {
		let profiles = this.props.profiles;

		return (
			<div>
				<Search
					profiles={ profiles }
					searchProfiles={ this.searchProfiles.bind( this ) }
					query={ this.state.query }
				/>
				<ul className="profiles-list">
					{ this.getProfilesList() }
				</ul>
			</div>
		);
	}

	static get propTypes() {
		return {
			profiles: React.PropTypes.object
		};
	}
}

export default List;
