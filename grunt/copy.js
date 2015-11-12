module.exports = function( grunt ) {

	grunt.config.set( "copy", {
		img: {
			expand: true,
			cwd: "src",
			src: "img/**/*",
			dest: "public/assets"
		},
		test: {
			expand: true,
			cwd: "node_modules/qunitjs/qunit",
			src: "*",
			dest: "tests/qunit"
		}
	} );

	grunt.loadNpmTasks( "grunt-contrib-copy" );

};
