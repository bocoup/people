var webpack = require( 'webpack' );

module.exports = function( grunt ) {

grunt.config.set( 'webpack', {
	options: {
		entry: './src/index.js',
		output: {
			path: 'public/assets/',
			filename: 'bundle.js',
			publicPath: '/assets/'
		},
		module: {
			loaders: [
				{
					// test: /\.jsx?$/,
					// include: [ 'src' ],
					loader: 'babel',
					query: {
						// https://github.com/babel/babel-loader#options
						cacheDirectory: false,
						presets: [ 'react', 'es2015' ]
					}
				}
			]
		}
	},
	dev: {
		watch: true,
		cache: false,
		debug: true,
		devtool: 'eval',
		plugins: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
		]
	},
	build: {
		debug: false,
		plugins: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
		]
	}
} );

grunt.loadNpmTasks( 'grunt-webpack' );

};
