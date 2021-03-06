const path = require('path');

var config = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [path.resolve(__dirname, 'helpers', 'shim.js')],
  coveragePathIgnorePatterns: ["/helpers/", "/node_modules/"]
};

module.exports = config;
