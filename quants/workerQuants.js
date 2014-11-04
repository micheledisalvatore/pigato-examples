var ZOM = require('pigato');
var quants=require('quants');

var Worker = ZOM.Worker;

var worker = new Worker('tcp://localhost:55555', 'quants');
worker.start();

worker.on('error', function(e) {
	console.log('ERROR', e);
});

worker.on('request', function(inp, rep) {
	console.log("Received worker: ", inp);

	inp = JSON.parse(inp);

	var res = quants[inp.fname].apply(quants, inp.args);

	rep.end(JSON.stringify(res));
});
