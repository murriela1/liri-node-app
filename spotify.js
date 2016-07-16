var spotify = require('spotify');
function spotifySong(songParam) {
    if (!songParam) {
        songParam === "The Sign";
    }

    spotify.search({
        type: 'track',
        query: songParam
    }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Album Name: " + data.tracks.items[0].album.name);
        console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
        console.log("Preview URL: " + data.tracks.items[0].preview_url);

    });
}

module.exports.spotify_this_song = spotifySong;





