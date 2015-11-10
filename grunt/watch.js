module.exports = function( grunt ) {

grunt.config.set( 'watch', {
	livereload: {
		options: {
			livereload: true,
		},
		files: [ 'public/**/*' ],
		tasks: [],
	},
	img: {
		files: '<%= copy.img.cwd %>/<%= copy.img.src %>',
		tasks: [ 'copy:img' ],
	},
	styles: {
		files: [ '<%= stylus.dev.src %>' ],
		tasks: [ 'stylus:dev' ],
	},
	html: {
		files: '<%= template.build.src %>',
		tasks: [ 'template:dev' ],
	},
} );

grunt.loadNpmTasks( 'grunt-contrib-watch' );

};
