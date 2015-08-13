
var architecture = require('./lib/architecture');

/**
 * The genbrain export will simply wrap a new architecture around
 * the given options
 */
module.exports = function (options) {
  return architecture(options);
};
