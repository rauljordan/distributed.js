
var comp = require('./lib/computation');


module.exports = function (options) {
  return new Architecture(options);
};

/**
 * The Global Distributed Architecture
 * @param options {Object} The options object to set up the architecture
 */

function Architecture(options) {
  this.loggable = options.loggable;
  this.logTime = options.logTime;
  this.computations = {};
}

Architecture.prototype.addComputations = function (comps) {
  comps.forEach(function (k, v) {
    console.log(k);
  });
};

Architecture.prototype.begin = function () {
  return;
};
