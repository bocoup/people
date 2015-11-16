import AppModel from "./app-model";

class Employee extends AppModel {

	// The resource type for translating back to JSON-API
	get type() {
		return "employees";
	}

	get props() {
		return {
			id: "string",
			date_end: "string",
			date_start: "string",
			email: "string",
			email_personal: "string",
			first: "string",
			github_user: "string",
			irc: "string",
			last: "string",
			notes: "string",
			phone: "string",
			slug: "string",
			twitter: "string",
			website: "string"
		};
	}

	get derived() {
		return {
			name: {
				deps: [ "first", "last" ],
				fn: () => `${ this.first } ${ this.last }`
			}
		};
	}

}

export default Employee;
