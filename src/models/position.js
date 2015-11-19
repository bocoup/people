import AppModel from "./app-model";

const Position = AppModel.extend( {

	// The resource type for translating back to JSON-API
	type: "positions",

	props: {
		id: "string",
		name: "string"
	}
} );

export default Position;
