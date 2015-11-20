import React, { Component } from "react";

class ProfileEdit extends Component {
	constructor() {
		super();

		this.state = {
			viewMode: true,
			value: ""
		};
	}

	get editItem() {
		return event => {
			event.preventDefault();

			this.setState( {
				viewMode: false
			} );
		};
	}

	get changeValue() {
		return event => this.setState( {
			value: event.target.value
		} );
	}

	get saveItem() {
		return event => {
			event.preventDefault();

			this.props.onSave( this.state.value );

			this.setState( {
				viewMode: true
			} );
		};
	}

	get cancelEdit() {
		return () => this.setState( {
			value: this.props.value,
			viewMode: true
		} );
	}

	componentWillMount() {
		this.setState( {
			value: this.props.value
		} );
	}

	get button() {
		let buttons = {
			view: (
				<button onClick={ this.editItem }>edit</button>
			),
			edit: (
				<span>
					<button onClick={ this.saveItem }>save</button>
					<button onClick={ this.cancelEdit }>cancel</button>
				</span>
			)
		};

		return buttons[ this.state.viewMode ? "view" : "edit" ];
	}

	get editButtons() {
		return this.props.canEdit ? this.button : null;
	}

	get editInput() {
		return (
			<input
				type={ this.props.type || "text" }
				value={ this.state.value }
				onChange={ this.changeValue }
			/>
		);
	}

	get control() {
		let modes = {
			view: this.props.children,
			edit: this.editInput
		};

		return modes[ this.state.viewMode ? "view" : "edit" ];
	}

	render() {
		if ( this.props.value === null && typeof this.props.value === "object" ) {
			return null;
		}
		return (
			<span>
				{ this.control }
				{ this.editButtons }
			</span>
		);
	}

	static get propTypes() {
		return {
			value: React.PropTypes.string,
			canEdit: React.PropTypes.bool.isRequired,
			onSave: React.PropTypes.func.isRequired
		};
	}
}

export default ProfileEdit;
