module.exports = function( grunt ) {

	grunt.config.set( "karma", {
		options: {
			configFile: "karma.conf.js"
		},
		dev: {
			singleRun: true,
			colors: true
		}
	} );

	grunt.loadNpmTasks( "grunt-karma" );

};
