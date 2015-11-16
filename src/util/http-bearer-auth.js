/**
 * Decorate requests made by the target model/collection with the
 * necessary headers for HTTP bearer authentication. The information is
 * derived from global state as retrieved by the `token` module.
 */
import authRecord from "./auth-record";

function bearerAuth() {
	const token = authRecord.get().token;

	if ( !token ) {
		return null;
	}

	return {
		headers: {
			Authorization: `Bearer ${ token }`,
			"Content-Type": "application/vnd.api+json",
			Accept: "application/vnd.api+json"
		}
	};
}

export default bearerAuth;
