require('dotenv').config();
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// const userInput = process.argv[2];

function printSong (artist, track, URL, album){
	const message = `
	=============================================
		      		${artist}											
	=============================================
	Track Name: ${track}
	Album: ${album}
	Spotify URL: ${URL}`

	console.log(message);
}

function getSong (query) {

	spotify.search({ type: 'track', query: query }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }

	  printSong(data.tracks.items[0].artists[0].name, data.tracks.items[0].name, data.tracks.items[0].artists[0].external_urls.spotify, data.tracks.items[0].album.name)

	// console.log("URL Preview", data.tracks.items[0].artists[0].external_urls.spotify);
	});
}

module.exports.get = getSong;
// getSong("with or without you")
