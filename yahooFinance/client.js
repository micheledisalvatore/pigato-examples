var PIGATO = require('pigato');
var client = new PIGATO.Client('tcp://localhost:55555');

client.start();

client.on(
	'error',
	function(err) {
		console.log("CLIENT ERROR", err);
	}
);

// Streaming implementation

var res = client.request(
	'downloadStock',
	{
		ticker:'AAPL',
		startDay:'1',
		startMonth:'6',
		startYear:'2013',
		endDay:'1',
		endMonth:'6',
		endYear:'2014',
		freq:'d'
	},
	{ timeout: 90000 }
);

var body = '';
res.on('data', function(data) {
		body += data;
}).on('end', function() {
	console.log(body);
});
