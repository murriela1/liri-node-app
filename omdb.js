var request = require('request');

function getMovie(title) {
    var year;
    var rating;
    var country;
    var language;
    var plot;
    var actors;
    var rottenTomatoesRating;
    var rottentomatoesURL;
    if (title) {
        var movieTitle = title;
    } else {
        var movieTitle = "Mr. Nobody";
    }
 
    var omdbUrl = "http://www.omdbapi.com/?t=" + movieTitle + '&tomatoes=true&r=json';
    request(omdbUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response);
            rBody = JSON.parse(body);
            movieTitle = rBody['Title'];
            year = rBody['Year'];
            rating = rBody['Rated'];
            country = rBody['Country'];
            language = rBody['Language'];
            plot = rBody['Plot'];
            actors = rBody['Actors'];
            rottenTomatoesRating = rBody['tomatoRating'];
            rottentomatoesURL = rBody['tomatoURL'];

            console.log('the title is ', movieTitle);
            console.log('the year is ', year);
            console.log('the rating is ', rating);
            console.log('the country is ', country);
            console.log('the language is', language);
            console.log('the plot is', plot);
            console.log('the actors are', actors);
            console.log('the Rotten Tomatoes Ratings are', rottenTomatoesRating);
            console.log('the Rotten Tomatoes URL is', rottentomatoesURL);
        }
    })
};


module.exports.movie_command = getMovie;