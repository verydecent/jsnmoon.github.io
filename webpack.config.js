/** @format */

const path = require( 'path' );
const webpack = require( 'webpack' );
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' );
const PrerenderSpaPlugin = require( 'prerender-spa-plugin' );

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		path: path.resolve( __dirname, './dist' ),
		publicPath: '/dist/',
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
	},
	devtool: '#eval-source-map',
	plugins: [ new VueLoaderPlugin() ],
};

const isProduction = process.env.NODE_ENV === 'production';
if ( isProduction ) {
	module.exports.devtool = '#source-map';
	module.exports.mode = 'production';
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = ( module.exports.plugins || [] ).concat( [
		new webpack.DefinePlugin( {
			'process.env': {
				NODE_ENV: '"production"',
			},
		} ),
		new webpack.LoaderOptionsPlugin( {
			minimize: true,
		} ),
		new PrerenderSpaPlugin( {
			staticDir: path.join( __dirname, 'dist' ), // Absolute path to static root
			// List of routes to prerender
			routes: [ '/' ],
		} ),
	] );
}
