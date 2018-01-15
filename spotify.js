require('dotenv').config();
var keys = require('./keys');
var spotify = new Spotify(keys.spotify);
// var Spotify = require('spotify');
var https = require('https');

console.log(keys.spotify.secret);
console.log(keys.spotify.id);

spotify.search({type: 'artist', query: "U2"}, (error, data) => {
	if (error){
		console.log(error);
	}
	console.log(data);
})

