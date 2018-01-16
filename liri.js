const movie = require("./imdb");
const twitter = require('./twitter');
const fs = require('fs');
const spotify = require('./spotify');

// const command = fs.readFileSync("random.txt");

// console.log(command);




// const queryMovie = process.argv.slice(2)
// movie.get(queryMovie);

// const queryTwitter = process.argv.slice(2);
// twitter.findTweet(queryTwitter);

const querySpotify = process.argv.slice(2);
spotify.get(querySpotify);