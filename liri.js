var keys = require('./keys.js').twitterKeys;
var tweets = require('./twitter.js');
var imported_movie_command = require('./omdb.js').movie_command;
var imported_spotify_this_song = require('./spotify.js').spotify_this_song;
var fs = require('fs.extra');
var command = process.argv[2];
var commandArg = process.argv[3];

// ensure that the console command is working correctly
console.log(command);

if (command === 'movie-this') {
    var movieTitle = commandArg;
    console.log("the movie title is ", movieTitle);
    imported_movie_command(movieTitle);

} else if (command === 'my-tweets') {
	tweets.getTweets(process.argv[3]);
}else if (command === 'spotify_this_song') {
	var songName = commandArg;
	imported_spotify_this_song(songName);
}else if (command === "do-what-it-says"){
  fs.readFile('./random.txt');
  var doIt = commandArg;
};