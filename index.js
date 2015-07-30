
var comp = require('./lib/computation');

/**
 * The Global Distributed Architecture
 * @param options {Object} The options object
 */

module.exports = function (options) {
  return new Architecture(options);
};

function Architecture(options) {
  this.computations = {
    
  };
}

Architecture.prototype.addCompututation = function (options) {
  if (options.beganComputation) {
    return false;
  }
  return true;
};
