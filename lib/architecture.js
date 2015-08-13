
module.exports = function (options) {
  return new Architecture(options);
}

/**
 * The Global Distributed Architecture
 * @param options {Object} The options object to set up the architecture
 */

function Architecture(options) {
  this.loggable = options.loggable;
  this.reactiveVars = options.reactiveVars;
  this.comps = {};
}

Architecture.prototype.components = function (comps) {
  var self = this;
  self.comps = comps;
};

Architecture.prototype.start = function () {
  var self = this;
  self.comps.funcs.forEach(function (f) {
    f();
  })
};
