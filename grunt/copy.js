module.exports = function( grunt ) {

grunt.config.set( 'copy', {
	img: {
		expand: true,
		cwd: 'src',
		src: 'img/**/*',
		dest: 'public/assets'
	}
} );

grunt.loadNpmTasks( 'grunt-contrib-copy' );

};
