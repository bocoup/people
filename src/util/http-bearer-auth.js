/**
 * Decorate requests made by the target model/collection with the
 * necessary headers for HTTP bearer authentication. The information is
 * derived from global state as retrieved by the `token` module.
 */
import authRecord from "./auth";

function bearerAuth() {
	const credentials = authRecord.parseCredentials();

	if ( !credentials.token ) {
		return null;
	}

	return {
		headers: {
			Authorization: `Bearer ${ credentials.token }`,
			"Content-Type": "application/vnd.api+json",
			Accept: "application/vnd.api+json"
		}
	};
}

export default bearerAuth;
