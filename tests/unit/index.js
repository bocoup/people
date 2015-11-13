QUnit.module( "example tests", () => {
	test( "testing", assert => {
		assert.ok( true );
	} );

	test( "this should pass as well", assert => {
		assert.ok( true );
		assert.equal( 42, 42 );
	} );
} );
