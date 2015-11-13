module.exports = function( grunt ) {

	grunt.config.set( "eslint", {
		build: {
			options: {
				configFile: ".eslintrc"
			},
			src: [
				"Gruntfile.js",
				"grunt/*.js"
			]
		},
		dev: {
			options: {
				configFile: "src/.eslintrc"
			},
			src: "src/**/*.js{,x}"
		},
		test: {
			options: {
				configFile: "tests/.eslintrc"
			},
			src: [
				"tests/**/*.js",
				"!tests/bundle.js",
				"!tests/qunit/*.js"
			]
		}
	} );

	grunt.loadNpmTasks( "grunt-eslint" );

};
