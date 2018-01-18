var http = require('http');
const key = '4647eb5a';

function imdbRequest(query){
	const response = http.get(`http://www.omdbapi.com/?t=${query}&y=2012&plot=full&apikey=${key}`, response => {
		try{
			let body = "";
			response.on('data', data => {
				body += data.toString();
			});
			response.on('end', () => {
				try {
					body = JSON.parse(body);
					// console.log(body);
					console.log("==============================================================");
					console.log(body.Title);
					console.log("-------------------------------------------");
					console.log("Year: ", body.Year);
					try {
					console.log("Internet Movie Database: ", body.Ratings[0].Value);
				} catch (error){

				};
					try {
					console.log("Rotten Tomatoes: ", body.Ratings[1].Value);
				} catch (error){

				};
					console.log("Release Year: ", body.Release);
					console.log("Actor/s: ", body.Actors);
					console.log("Country where it was produced: ", body.Country);
					console.log("Language: ", body.Language);
					console.log("-------------------------------------------");
					console.log("Plot: ", body.Plot);
					// printMessage(body.Title, body.Year, body.Ratings[0].Value, body.Released, body.Actors, body.Country, body.Language, body.Plot);
				} catch (error) {
					console.error("Seems we", error.message);
				}
			})
		} catch(error){
		console.error(error.message);
		}
	})
}

module.exports.get = imdbRequest;
// imdbRequest("the godfather");