/**
 * The Global Computation Object
 * @param options {Object} The options object
 */

module.exports = function (fun) {
  return new Computation(fun);
};

function Computation(fun) {
  this.execution = fun;
  this.timesRan = 0;
}

Computation.prototype.run = function () {
  this.execution();
  this.timesRan++;
};
