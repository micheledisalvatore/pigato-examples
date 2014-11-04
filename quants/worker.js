var PIGATO = require('pigato');
var quants = require('quants');

var worker = new PIGATO.Worker('tcp://localhost:55555', 'quants');
worker.start();

worker.on('error', function(e) {
	console.log('WORKER ERROR', e);
});

worker.on('request', function(inp, rep) {
	console.log("Received worker: ", inp);

	var res = quants[inp.fname].apply(quants, inp.args);

	rep.end(res);
});
