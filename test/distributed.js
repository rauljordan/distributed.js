var test = require('tape');
var architecture = require('../');

test('architecture test', function (t) {

    /**
     * Creates a basic architecture that is loggable
     * and adds some basic computations that will be active forever.
     * It logs the current state continuously, every 5 seconds.
     */
    var arc = architecture({
      loggable:true,
      logTime:5
    });

    arc.addComputations({multiply: function (x) {
      return x * 2;
    }});


    t.end();
});
