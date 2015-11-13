module.exports = function( grunt ) {
	grunt.initConfig( {} );
	grunt.loadTasks( "grunt" );

	grunt.registerTask( "dev", [
		"eslint",
		"clean",
		"copy",
		"stylus:dev",
		"template:dev",
		"webpack:dev",
		"webpack:test",
		"karma:watch:start",
		"watch"
	] );

	grunt.registerTask( "test", [
		"eslint",
		"clean:test",
		"copy:test",
		"webpack:test",
		"karma"
	] );

	grunt.registerTask( "default", [ "dev" ] );
};
