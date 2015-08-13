
var architecture = require('./lib/architecture');

/**
 * The Haze export will simply wrap an architecture around
 * the given options
 */
module.exports = function (options) {
  return architecture(options);
};
