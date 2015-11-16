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
		"karma"
	] );

	grunt.registerTask( "test", [
		"eslint",
		"clean:test",
		"copy:test",
		"webpack:test",
		"karma"
	] );

	grunt.registerTask( "build", [
		"eslint:grunt",
		"eslint:src",
		"clean",
		"copy:img",
		"stylus:build",
		"template:build",
		"webpack:build"
	] );

	grunt.registerTask( "default", [
		"dev",
		"karma:watch:start",
		"watch"
	] );
};
