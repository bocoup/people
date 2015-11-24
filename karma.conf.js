module.exports = function( config ) {
	config.set( {
		browsers: [ "Chrome", "Firefox", "PhantomJS" ],
		port: 9876,
		phantomjsLauncher: {

			// Have phantomjs exit if a ResourceError is encountered
			// (useful if karma exits without killing phantom)
			exitOnResourceError: true,
		},
		basePath: "tests/",
		files: [ "bundle.js" ],
		frameworks: [ "qunit" ],
		plugins: [
			"karma-chrome-launcher",
			"karma-firefox-launcher",
			"karma-qunit"
		],
		reporters: "progress"
	} );
};
