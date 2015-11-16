import AppCollection from "./app-collection";
import Employee from "../models/employee";

class Employees extends AppCollection {
	get model() {
		return Employee;
	}

	get url() {
		return () => `${ this.baseURL }employees`;
	}

}

export default Employees;
