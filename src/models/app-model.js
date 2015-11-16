import JSONAPIModel from "ampersand-jsonapi-model";
import bearerAuth from "../util/http-bearer-auth";

// Returns a default Collection for the whole app
class AppModel extends JSONAPIModel {
	get ajaxConfig() {
		return bearerAuth;
	}
}

export default AppModel;
