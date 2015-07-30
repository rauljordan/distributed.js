/**
 * The Global Computation Object
 * @param options {Object} The options object
 */

module.exports = function (options) {
  return new Computation(options);
};

function Computation(options) {
  this.loggable = options.loggable;
}
