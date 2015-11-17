import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router";

class ListItem extends Component {
	render() {
		var employee = this.props.employee;
		return (
			<li>
				<div><Link to={ `/profile/${ employee.id }` }>{ employee.name }</Link></div>
				<div>Email: { employee.email }</div>
				<div>Github user: { employee.github_user }</div>
				<div>Website: { employee.website }</div>
				<div>Twitter: { employee.twitter }</div>
				<div>IRC: { employee.irc }</div>
			</li>
		);
	}

	static get propTypes() {
		return {
			employee: React.PropTypes.object
		};
	}
}

class List extends Component {

	updateEmployees() {
		let employees = this.props.employees;

		if ( employees.map ) {
			this.employees = employees.map( emp => emp );
		}
	}

	componentWillUpdate() {
		this.updateEmployees();
	}

	componentWillMount() {
		this.updateEmployees();
	}

	getEmployeesList() {
		let employees = this.props.employees;
		let employeesList = [];

		if ( employees.map ) {
			employeesList = employees.map( emp => (
				<ListItem employee={emp} key={emp.id} />
			) );
		}

		return employeesList;
	}

	render() {
		return (
			<ul>
				{this.getEmployeesList()}
			</ul>
		);
	}

	static get propTypes() {
		return {
			employees: React.PropTypes.object
		};
	}
}

export default List;
