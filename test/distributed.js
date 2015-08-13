var distributedArchitecture = require('../');


/**
 * Creates a basic architecture that is loggable
 * and adds some basic computations that will be active forever.
 * It logs the current state continuously, every 5 seconds.
 */
var arc = distributedArchitecture({
  loggable:true,
  logTime:5
});

arc.addComputations({
  multiply: function (x) {
    return x * 2;
  },
  addition:function (x) {
    return x + 2;
  }
});

arc.begin();
