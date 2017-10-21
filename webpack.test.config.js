/*
 |--------------------------------------------------------------------------
 | Webpack config file
 |--------------------------------------------------------------------------
 */

const path = require("path");
const glob = require("glob");

let entries = {};
glob.sync("./test/src/**/*.@(ts|tsx|js)").map(function(file) {
	let outPath = file
			.replace(/\.\/test\/src\//, "./test/spec/")
			.replace(/(.*)\..*/, "$1");
	entries[outPath] = [file];
});

module.exports = {
	context: __dirname,
	target: 'web',
	entry: entries,
	output: {
		path: __dirname,
		filename: '[name].js' //'./[id].[name].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
        	'@src': path.resolve(__dirname, 'src'),
            '@test': path.resolve(__dirname, 'test')
		}
	},
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
