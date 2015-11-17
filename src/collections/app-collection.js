import JSONAPICollection from "ampersand-jsonapi-collection";
import bearerAuth from "../util/http-bearer-auth";
import config from "../config";

// Returns a default Collection for the whole app
const AppCollection = JSONAPICollection.extend( {
	ajaxConfig: bearerAuth,
	baseURL: config.API_ROOT
} );

export default AppCollection;
