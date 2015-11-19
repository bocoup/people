import React, { Component } from "react"; // eslint-disable-line no-unused-vars

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
			value: event.input.value
		} );
	}

	get saveItem() {
		return event => {
			event.preventDefault();

			// TODO: call parent saving item

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
		return (
			<span>
				{ this.control }
				{ this.button }
			</span>
		);
	}
}

export default ProfileEdit;
