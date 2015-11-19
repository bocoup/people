import React, { Component } from "react";

class ProfileEdit extends Component {
	constructor() {
		super();

		this.state = {
			value: "",
			viewMode: true
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

	componentWillMount() {
		this.setState( {
			value: this.props.value,
			content: this.props.children || this.props.value
		} );
	}

	get button() {
		let modes = {
			view: {
				action: this.editItem,
				name: "edit"
			},
			edit: {
				action: this.saveItem,
				name: "save"
			}
		};

		let { action, name } = modes[ this.state.viewMode ? "view" : "edit" ];

		return (
			<button onClick={ action }>{ name }</button>
		);
	}

	get editInput() {
		return (
			<input type="text"
				value={ this.state.value }
				onChange={ this.changeValue }
			/>
		);
	}

	get control() {
		let modes = {
			view: this.state.content,
			edit: this.editInput
		};

		return modes[ this.state.viewMode ? "view" : "edit" ];
	}

	render() {
		let button = this.props.canEdit ? this.button : null;
		return (
			<span>
				{ this.control }
				{ button }
			</span>
		);
	}

	static get propTypes() {
		return {
			value: React.PropTypes.string,
			canEdit: React.PropTypes.bool,
			onSave: React.PropTypes.func
		};
	}
}

export default ProfileEdit;
