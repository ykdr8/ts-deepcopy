/*
 |--------------------------------------------------------------------------
 | Karma config file
 |--------------------------------------------------------------------------
 */

module.exports = function(config) {
	config.set({
		basePath: "",
		frameworks: [
			"mocha"
		],
		files: [
			"./test/spec/**/*.js"
		],
		exclude: [],
		preprocessors: {},
		browserify: {
			debug: true,
			transform: []
		},
		reporters: [
			"mocha"
		],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		// LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		autoWatch: true,
		browsers: [ "ChromeHeadless", "FirefoxHeadless" ],
		customLaunchers: {
		  FirefoxHeadless: {
			base: "Firefox",
			flags: [ "-headless" ],
		  },
		},
		// https://www.npmjs.com/browse/keyword/karma-launcher
		singleRun: false
	});
};
