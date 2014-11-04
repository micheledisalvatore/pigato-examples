var http= require('http');
var w = new require('pigato').Worker;
var worker= new w('tcp://localhost:55555','downloadStock')
worker.start();


worker.on('error',function(err){
	console.log(err);
});

worker.on('request',function(inp,rep){
	var args=JSON.parse(inp);
	console.log(inp);
	console.log(args);

	var url="http://ichart.finance.yahoo.com/table.csv?s="
	+args.ticker+"&a="+args.startDay+"&b="+args.startMonth+"&c="+args.startYear+"&d="+
			args.endYear+"&e="+args.endMonth+"&f="+args.endYear+"&g="+args.freq+"&ignore=.csv";
	console.log(url);
	http.get(url,
			function(res) {
				 
				res.on('data', function(chunk) {
					rep.write(String(chunk));
				}).on('end', function() {
					rep.end('');
				});
				

			}).on('error', function(e) {
				console.log("Got error: " + e.message);
			}
	);



});



