import Auth from "../../../src/components/auth";
import TestUtils from "react-addons-test-utils";
import React from "react"; // eslint-disable-line no-unused-vars
import renderer from "../helpers/shallow-renderer";

const { module, test } = QUnit;

module( "Components - Auth", function() {
	this.logIn = () => 43;
	this.logOut = () => 44;

	test( "log in button", function( assert ) {
		let auth = TestUtils.renderIntoDocument(
			<Auth token="" logIn={ this.logIn } logOut={ this.logOut } />
		);

		let button = TestUtils.findRenderedDOMComponentWithTag( auth, "button" );

		assert.equal( button.textContent, "Log In" );
	} );

	test( "log in button - using a shallow renderer", assert => {
		renderer.render(
			<Auth token="" logIn={ this.logIn } logOut={ this.logOut } />
		);

		let auth = renderer.getRenderOutput();

		assert.equal( auth.type, "div" );
		assert.equal( auth.props.children.type, "button" );
		assert.equal( auth.props.children.props.children, "Log In" );
	} );
} );
