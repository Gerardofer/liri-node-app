var http = require('http');
const key = '4647eb5a';
// const userInput = "the godfather";


function printMessage(title, year, rating1, release, actors, country, language, plot){
	const message = `
=========================================\n
Title: ${title}\n
=========================================\n
Year: ${year}\n
Internet Movie Database: ${rating1}\n
Release Year: ${release}\n
Actors: ${actors}\n
Country where it was produced: ${country}\n
Language: ${language}\n
=========================================\n
Main Plot: ${plot}`;
console.log(message);
}

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
					printMessage(body.Title, body.Year, body.Ratings[0].Value, body.Released, body.Actors, body.Country, body.Language, body.Plot);
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