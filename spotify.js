require('dotenv').config();
var keys = require('./keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


function getSong (query) {

	spotify.search({ type: 'track', query: query }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	  let songData = data.tracks.items

	  songData.forEach(function(track){
	  	console.log("=============================================");
	  	console.log("Artist/s: ", track.artists[0].name);
	  	console.log("----------------------------");
	  	console.log("Track Name: ", track.name);
	  	console.log("Album Name: ", track.album.name);
	  	console.log("Preview URL: ", track.preview_url);
	  })
	});
}

module.exports.get = getSong;

