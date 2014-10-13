var Broker = require('pigato').Broker;

var broker = new Broker("tcp://*:55555");
broker.start(function(){});
