module.exports = function( grunt ) {

	grunt.config.set( "watch", {
		livereload: {
			options: {
				livereload: true
			},
			files: [
				"public/**/*",
				"tests/*.html",
				"tests/bundle.js"
			],
			tasks: []
		},
		img: {
			files: "<%= copy.img.cwd %>/<%= copy.img.src %>",
			tasks: [ "copy:img" ]
		},
		styles: {
			files: [ "<%= stylus.dev.src %>" ],
			tasks: [ "stylus:dev" ]
		},
		html: {
			files: "<%= template.build.src %>",
			tasks: [ "template:dev" ]
		},
		eslint: {
			files: [ "<%= eslint.grunt.src %>" ],
			tasks: [ "eslint" ]
		},
		js: {
			files: [
				"src/**/*.js",
				"tests/**/*.js",
				"!tests/bundle.js",
				"!tests/qunit/*"
			],
			tasks: [
				"concurrent:eslint",
				"clean",
				"concurrent:files",
				"karma:watch:run"
			]
		}
	} );

	grunt.loadNpmTasks( "grunt-contrib-watch" );

};
