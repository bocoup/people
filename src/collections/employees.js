import AppCollection from "./app-collection";
import Employee from "../models/employee";
import Positions from "./positions";

const Employees = AppCollection.extend( {
	model: Employee,
	url() {
		return `${ this.baseURL }employees`;
	},

	positions: new Positions()
} );

export default Employees;
