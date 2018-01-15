require('dotenv').config();
var Twitter = require('twitter');
var keys = require('./keys')
var client = new Twitter(keys.twitter);


//===========================================================================
//Twitter
function getTwitter (query){

	var userID = {screen_name: "guaicapuro4"};

	client.get('statuses/user_timeline', userID, function (error, tweets, response){
		if (error){
			console.log(error);
		}

		tweets.forEach (function (tweet){
			console.log('=========================================================');
			console.log("Usename: ", userID.screen_name);
			console.log("When: ", tweet.created_at)
			console.log("Tweet: ", tweet.text);
			console.log('=========================================================');
		});
	})
}


getTwitter();
// module.exports.get = getTwitter;