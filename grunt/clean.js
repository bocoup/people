module.exports = function( grunt ) {

	grunt.config.set( "clean", {
		public: "public",
		test: "tests/bundle.js"
	} );

	grunt.loadNpmTasks( "grunt-contrib-clean" );

};
