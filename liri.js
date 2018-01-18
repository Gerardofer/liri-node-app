const movie = require("./imdb");
const twitter = require('./twitter');
const spotify = require('./spotify');
const fs = require('fs');	
const userInput = process.argv[2];
let queryLiri = process.argv[3];

let doWhatItSays = fs.readFileSync("random.txt").toString().split(",");

if (userInput == "spotify-this-song"){
	if (queryLiri == undefined) {
		console.log("WE HAVE SELECTED 'The Sign'");
		queryLiri = "The sing";
		spotify.get(queryLiri);
	}
	else {
		spotify.get(queryLiri);
	}
}

else if (userInput == "my-tweets"){
	twitter.findTweet();
}

else if (userInput == "movie-this"){
	if (queryLiri == undefined){
		console.log("WE HAVE SELECTED 'Space Odyssey'")
		queryLiri = "Space Odyssey";
		movie.get(queryLiri);
	}
	else {
		movie.get(queryLiri);
	}
}

else if (userInput == "do-what-it-says"){
	spotify.get(doWhatItSays[1]);
};