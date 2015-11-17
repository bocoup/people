import JSONAPIModel from "ampersand-jsonapi-model";
import bearerAuth from "../util/http-bearer-auth";

// Returns a default Collection for the whole app
const AppModel = JSONAPIModel.extend( {
	ajaxConfig: bearerAuth
} );

export default AppModel;
