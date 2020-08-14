module.exports = {

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of entry points indicating a set of files
  // for which coverage information should be collected
  collectCoverageFrom: [
    './server/index.js*',
    './database/index.js*',
    './client/components/*.{js,jsx}',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: './__coverage__',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Whether to use watchman for file crawling
  // watchman: true,
};
