import Employees from "../collections/employees";

export default callback => {
	const employees = new Employees();

	employees.fetch( {
		data: {
			filter: {
				active: "true"
			}
		},
		success: () => {
			callback( employees );
		}
	} );

	return employees;
};
