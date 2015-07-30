var test = require('tape');
var distributed = require('../');
var comp = require('../lib/computation.js');

test('distributed', function (t) {

    var loggableComp = comp({loggable:true})
    t.equal(loggableComp.loggable, true);

    t.end();
});
