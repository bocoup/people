import AppCollection from "./app-collection";
import Employee from "../models/employee";

const Employees = AppCollection.extend( {
	model: Employee,
	url() {
		return `${ this.baseURL }employees`;
	}
} );

export default Employees;
