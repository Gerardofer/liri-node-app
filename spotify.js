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
	  
	  // console.log(songData.length)

	  songData.forEach(function(track){
	  	console.log("=============================================");
	  	console.log("Artist/s: ", track.artists[0].name);
	  	console.log("----------------------------");
	  	console.log("Track Name: ", track.name);
	  	console.log("Album Name: ", track.album.name);
	  	console.log("Preview URL: ", track.preview_url);
	  })

	  // printSong(data.tracks.items[0].artists[0].name, data.tracks.items[0].name, data.tracks.items[0].artists[0].external_urls.spotify, data.tracks.items[0].album.name)

	// console.log("URL Preview", data.tracks.items[0].artists[0].external_urls.spotify);
	});
}

module.exports.get = getSong;
// getSong("with or without you")
