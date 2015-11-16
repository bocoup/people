import React, { Component } from "react"; // eslint-disable-line no-unused-vars

class List extends Component {
	render() {
		return (
			<div>
				<h1>This is the List page</h1>
				{ this.props.employees }
			</div>
		);
	}

	static get propTypes() {
		return {
			employees: React.PropTypes.object
		};
	}
}

export default List;
