module.exports = function( grunt ) {

	grunt.config.set( "karma", {
		options: {
			configFile: "karma.conf.js"
		},
		dev: {
			singleRun: true,
			colors: true
		},
		watch: {
			background: true,
			singleRun: false
		}
	} );

	grunt.loadNpmTasks( "grunt-karma" );

};
