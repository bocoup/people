module.exports = function( grunt ) {

	grunt.config.set( "stylus", {
		options: {
			import: [ "nib" ],
			paths: [ "src/styles" ]
		},
		dev: {
			options: {
				compress: false
			},
			src: [
				"src/styles/main.styl"
			],
			dest: "public/assets/bundle.css"
		},
		build: {
			src: "<%= stylus.dev.src %>",
			dest: "<%= stylus.dev.dest %>"
		}
	} );

	grunt.loadNpmTasks( "grunt-contrib-stylus" );

};
