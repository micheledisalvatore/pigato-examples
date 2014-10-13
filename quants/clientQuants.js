var ZOM = require('pigato');
var quants=require('quants');
var Client = ZOM.Client;


var client = new Client('tcp://localhost:55555');
client.start();

client.on('error', function(e) {
	console.log('ERROR', e);
});

client.request(
	'quants', JSON.stringify({
		fname: 'mcvar',
		args: [0.95,1,0.0004,0.01,1]
	}),
	undefined,
	function(err, data) {
		if (err) {
			throw new Error(err);
		}
		console.log("RES",data);
	}, { timeout: 60000 }
);





