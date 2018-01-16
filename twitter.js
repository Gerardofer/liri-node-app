require('dotenv').config();
var Twitter = require('twitter');
var keys = require('./keys')
var client = new Twitter(keys.twitter);


//===========================================================================
//Twitter
var findTweet = function (query){

	var userID = {screen_name: query};

	client.get('statuses/user_timeline', userID.screen_name, function (error, tweets, response){
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

module.exports = {
	findTweet
};