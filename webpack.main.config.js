/*
 |--------------------------------------------------------------------------
 | Webpack config file
 |--------------------------------------------------------------------------
 */

const path = require("path");
const UglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	context: __dirname,
	target: 'web',
	entry: {
		main: ['./src/ts/main']
	},
	output: {
		path: __dirname,
		filename: './dist/js/index.js' //'./[id].[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
        	'@src': path.resolve(__dirname, 'src'),
            '@test': path.resolve(__dirname, 'test')
		}
	},
	plugins: [
	  new UglifyPlugin()
	],
	module: {
		rules: [{
			resource: {
				test: /\.tsx?$/,
				exclude: /node_modules/
			},
			use: {
				loader: 'ts-loader'
			}
		}]
	}
};
