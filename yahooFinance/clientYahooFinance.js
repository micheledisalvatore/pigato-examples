var c=require('pigato').Client;
var client= new c('tcp://localhost:55555');

client.start();

client.on('error',function(err){console.log(err);});

/*
//Alternative implementation
 
client.request('downloadStock',
				JSON.stringify({
					ticker:'AAPL',
					startDay:'1',
					startMonth:'6',
					startYear:'2013',
					endDay:'1',
					endMonth:'6',
					endYear:'2014',
					freq:'d'
				}), undefined,
				function(err,data){
					if(err){
						throw new Error(err);
					}	
					console.log(data);
				},{timeout:90000}
);
*/

var res = client.request('downloadStock',
				JSON.stringify({
					ticker:'AAPL',
					startDay:'1',
					startMonth:'6',
					startYear:'2013',
					endDay:'1',
					endMonth:'6',
					endYear:'2014',
					freq:'d'
				}),
				{ timeout: 90000 }
);

var body = '';
res.on('data', function(data) {
		body += data;
}).on('end', function() {
	console.log(body);
});