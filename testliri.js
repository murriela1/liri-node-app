//<script src="keys.js"></script>

	//consumer_key = 'T6rMJn5O0NAEJc4NQ8B6JFwSM',
	//consumer_secret: 'Fi9BdTiJqSvJItVdj5MVFwRC6982b50jPBR0DLXQq5ZkGZAQeU',
	//access_token_key: '	906338863-zB8FmBDB3QShxGUpjy2MXiGQpzvmhkO1Yz8ZGSLD',
	//access_token_secret: 'L8zoXP48jStsYPUuHP4nOObS2bY4wABTqLArvdgXbwdGf',


var request = require('request');

request('http://www.omdbapi.com/?t=' +movieName + '&y=&plot=short&r=json', function (error, response, body) {

	if (!error && response.statusCode === 200) { ///!error means not an error
		console.log(body);
		console.log(typeof body);
		console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"]);
	}
});


