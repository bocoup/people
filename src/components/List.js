import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";
import Search from "./Search";

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
			visible: false
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

	get setVisible() {
		return visible => this.setState( { visible } );
	}

	render() {

		// We need to force this Ampersand object to return a pure Array
		let profiles = this.props.profiles.map( profiles => profiles );

		return (
			<div>
				<Search
					profiles={ profiles }
					setVisible={ this.setVisible }
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
