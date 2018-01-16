require('dotenv').config();
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// const userInput = process.argv[2];

function getSong (query) {

	spotify.search({ type: 'track', query: query }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }

	console.log("Artist Name:", data.tracks.items[0].artists[0].name); 
	console.log("Track Name:", data.tracks.items[0].name);
	console.log("URL Preview", data.tracks.items[0].artists[0].external_urls);
	console.log("Album:", data.tracks.items[0].album.name)

	});
}

module.exports.get = getSong;

