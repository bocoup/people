module.exports = function( grunt ) {

	grunt.config.set( "concurrent", {
		eslint: [
			"eslint:grunt",
			"eslint:src",
			"eslint:test"
		],
		files: [
			"copy",
			"stylus:dev",
			"template:dev",
			"webpack:dev",
			"webpack:test"
		]
	} );

	grunt.loadNpmTasks( "grunt-concurrent" );

};
