module.exports = function( grunt ) {

grunt.config.set( 'template', {
	options: {
		data: {
			target: '<%= grunt.task.current.target %>'
		}
	},
	build: {
		src: 'src/index.html',
		dest: 'public/index.html'
	},
	dev: '<%= template.build %>'
} );

grunt.loadNpmTasks( 'grunt-template' );

};
