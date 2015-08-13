
var genbrain = require('../');

function calculateTemperature() {
  console.log(5);
}

function calculateHumidity() {
  console.log(10);
}

var gb = genbrain({
  loggable:false,
  reactiveVars:'all'
});

gb.components({
  funcs:[
    calculateHumidity,
    calculateTemperature
  ]
});

gb.start();
