import AppCollection from "./app-collection";
import Position from "../models/position";

const Positions = AppCollection.extend( {
	model: Position,
	url() {
		return `${ this.baseURL }positions`;
	}
} );

export default Positions;
