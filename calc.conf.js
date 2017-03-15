module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['mocha', 'chai'],    // adds the script tags
    browsers: ['Chrome'],
    singleRun: true,      // run tests in Chrome and exit back to shell prompt
    files: [
      'src/**/*.js',
      'test/specs/**/*.js'
    ]
  });
};
