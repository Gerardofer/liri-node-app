const movie = require("./imdb");
const twitter = require('./twitter');
const spotify = require('./spotify');
const fs = require('fs');	
const userInput = process.argv[2];
let queryLiri = process.argv[3];


if (userInput == "spotify-this-song"){
	if (queryLiri == undefined) {
		console.log("WE HAVE SELECTED 'The Sign'");
		queryLiri = "The sing";
		spotify.get(queryLiri);
	}
	else {
		spotify.get(queryLiri);
	}
}else if (userInput == "my-tweets"){
	twitter.findTweet()
}







// const command = fs.readFileSync("random.txt");
// console.log(command);

// const queryMovie = process.argv.slice(2)
// movie.get(queryMovie);

// const queryTwitter = process.argv.slice(2);
// twitter.findTweet(queryTwitter);

// spotify.get(querySpotify);