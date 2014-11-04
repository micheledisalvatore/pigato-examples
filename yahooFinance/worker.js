var PIGATO = new require('pigato');
var http = require('http');

var worker = new PIGATO.Worker('tcp://localhost:55555','downloadStock')
worker.start();

worker.on('error',function(err) {
	console.log("WORKER ERROR", err);
});

worker.on('request',function(inp, rep){
	var url="http://ichart.finance.yahoo.com/table.csv?s=" + inp.ticker + 
	"&a=" + inp.startDay + "&b=" + inp.startMonth+"&c=" + inp.startYear + "&d=" +
		inp.endYear + "&e=" + inp.endMonth + "&f=" + inp.endYear + "&g=" + inp.freq + "&ignore=.csv";

	//console.log(url);
	http.get(url, function(res) {
		res.on('data', function(chunk) {
			rep.write(String(chunk));
		}).on('end', function() {
			rep.end('');
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
});
