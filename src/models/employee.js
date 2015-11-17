import AppModel from "./app-model";

const Employee = AppModel.extend( {

	// The resource type for translating back to JSON-API
	type: "employees",

	props: {
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
	},

	derived: {
		name: {
			deps: [ "first", "last" ],
			fn() {
				return `${ this.first } ${ this.last }`;
			}
		},
		github: {
			deps: [ "github_user" ],
			fn() {
				return `https://github.com/${ this.github_user }`;
			}
		},
		twitter_link: {
			deps: [ "twitter" ],
			fn() {
				return `https://twitter.com/${ this.twitter }`;
			}
		}
	}
} );

export default Employee;
