import Auth from "../../../src/components/auth";
import TestUtils from "react-addons-test-utils";
import React from "react"; // eslint-disable-line no-unused-vars

const { module, test } = QUnit;

module( "Components - Auth", function() {
	this.logIn = () => 43;
	this.logOut = () => 44;

	test( "loading", function( assert ) {
		assert.equal( typeof Auth, "function" );

		let auth = TestUtils.renderIntoDocument(
			<Auth token="42" logIn={ this.logIn } logOut={ this.logOut } />
		);

		console.log( auth );

		// let button = TestUtils.findRenderedDOMComponentWithTag( auth, "button" );

		// assert.equal( button.getDOMNode().textContent, "login" );
	} );
} );
