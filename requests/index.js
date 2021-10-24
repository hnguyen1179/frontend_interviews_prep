const axios = require("axios");

let jokeResponse;

const getJoke = () => {
	const joke = axios.get("https://v2.jokeapi.dev/joke/Any");

	joke.then((res) => {
		console.log(res.data);

		jokeResponse = res.data.punchline;
	});
};

getJoke();

console.log(jokeResponse);
