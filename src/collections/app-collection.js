import JSONAPICollection from "ampersand-jsonapi-collection";
import bearerAuth from "../util/http-bearer-auth";
import config from "../config";

// Returns a default Collection for the whole app
class AppCollection extends JSONAPICollection {
	get ajaxConfig() {
		return bearerAuth;
	}

	get baseURL() {
		return config.API_ROOT;
	}
}

export default AppCollection;
