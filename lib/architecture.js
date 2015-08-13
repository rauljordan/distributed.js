var computation = require('./computation');

module.exports = function (options) {
  return new Architecture(options);
}

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
  var self = this;
  for (var name in comps) {
    /*
     * TODO Create computations by wrapping them in a new computation instance
     */
    self.computations[name] = computation(comps[name]);
  }
};

Architecture.prototype.begin = function () {
  var self = this;
  console.log("Began Architecture");
};
