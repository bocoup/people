module.exports = function( grunt ) {

	grunt.config.set( "karma", {
		options: {
			configFile: "test/karma.conf.js",
			port: 9999,
			browsers: [ "Chrome", "Firefox" ]
		},
		continuous: {
			singleRun: true,
			browsers: [ "PhantomJS" ]
		}

	} );

	grunt.loadNpmTasks( "grunt-karma" );

};
