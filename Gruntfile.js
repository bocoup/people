module.exports = function( grunt ) {

grunt.initConfig( {} );
grunt.loadTasks( 'grunt' );

grunt.registerTask( 'dev', [
	'clean',
	'copy',
	'stylus:dev',
	'template:dev',
	'webpack:dev',
	'watch'
] );

grunt.registerTask( 'default', [ 'dev' ] );

};
