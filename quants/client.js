var PIGATO = require('pigato');

var client = new PIGATO.Client('tcp://localhost:55555');
client.start();

client.on('error', function(e) {
	console.log('CLIENT ERROR', e);
});

client.request('quants', {
	fname: 'mcvar',
	args: [0.95,1,0.0004,0.01,1]
}, undefined,
function(err, data) {
	if (err) {
		throw new Error(err);
	}
	console.log("Monte Carlo VAR", data);
}, { timeout: 1000 });
