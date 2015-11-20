import Auth from "../../../src/components/auth";

QUnit.module( "Components - Auth", () => {
	QUnit.test( "loading", assert => {
		assert.equal( typeof Auth, "object" );
	} );
} );
