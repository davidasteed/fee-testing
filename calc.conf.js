module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['mocha', 'chai'],    // will add the script tags
    browsers: ['Chrome'],
    singleRun: true,      // will launch Chrome, run the tests, and leave it there
    files: [
      'src/**/*.js',
      'test/specs/**/*.js'
    ]
  });
};
