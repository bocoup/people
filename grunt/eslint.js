module.exports = function( grunt ) {

grunt.config.set( 'eslint', {
	build: {
		options: {
			configFile: '.eslintrc'
		},
		src: [
			'Gruntfile.js',
			'grunt/*.js'
		]
	},
	src: {
		options: {
			configFile: 'src/.eslintrc'
		},
		src: 'src/**/*.js{,x}'
	}
	// test: {
	// 	options: {
	// 		configFile: 'test/.eslintrc'
	// 	},
	// 	src: [
	// 		'test/**/*.js',
	// 		'!test/temp/**/*'
	// 	]
	// }
} );

grunt.loadNpmTasks( 'grunt-eslint' );

};
